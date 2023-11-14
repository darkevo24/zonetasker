import React, { useState } from 'react';
import Navbar from './Navbar';

interface LoginProps {
    handleLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        handleLogin(email, password);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-start md:px-10 px-3 py-20 justify-center signup">
                <div className='bg-white flex flex-col md:px-20 px-6 py-12 md:ml-32 rounded-lg'>
                    <img src={require("../logo/ZT.png")} alt='Zonetasker' className='w-72 mb-4' />
                    <form>
                        <p className='text-sm mt-6'>Email Address</p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />
                        <p className='text-sm'>Password</p>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />
                        <p className='font-bold text-base mb-4 cursor-pointer'>Forgot password?</p>
                        <button onClick={handleLoginClick} className="bg-black text-white py-2 px-4 h-12 rounded-full w-full">
                            Login
                        </button>
                    </form>
                    <p className='mt-4 text-center'>Don't have an account? <a href='sign-up' className='underline font-bold'>Sign Up</a></p>
                </div>
            </div>
        </>
    );
};

export default Login;
