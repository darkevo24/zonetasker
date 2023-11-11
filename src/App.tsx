import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Login from './components/Login';

interface SignUpData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  mobilePhone: string;
  password: string;
  zipCode: string;
}

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const handleSignUp = (signupData: SignUpData) => {
    // Handle sign up logic here
    console.log('Signing up:', signupData);
    // You can perform further actions like making API calls to a backend with this data
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<Services />} />
          <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
