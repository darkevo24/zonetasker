import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Step1 from './components/Post-a-job/Step1';
import Step2 from './components/Post-a-job/Step2';
import Step3 from './components/Post-a-job/Step3';
import Step4 from './components/Post-a-job/Step4';
import Dashboard from './components/Dashboard/Index';
import Profile from './components/Feature';
import ProfileDashboard from './components/Dashboard/Profile';

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
    console.log(`Logging in with email: ${email} and password: ${password}`);
    // Handle login logic here
  };

  const handleSignUp = (signupData: SignUpData) => {
    console.log('Signing up:', signupData);
    // Handle sign up logic here, like API calls with the data
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Services />} />
          <Route path="/post-a-job-step-1" element={<Step1 />} />
          <Route path="/post-a-job-step-2" element={<Step2 />} />
          <Route path="/post-a-job-step-3" element={<Step3 handleSignUp={handleSignUp} />} />
          <Route path="/post-a-job-step-4" element={<Step4 />} />
          <Route path="/sign-up" element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/profile" element={<ProfileDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
