import React, { useState } from 'react';

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
        <div className="flex flex-col items-start px-10 py-20 justify-center signup">
            <div className='bg-white flex flex-col px-20 py-12 md:ml-32 rounded-lg'>
                <img src={require("../logo/ZT.png")} alt='Zonetasker' className='w-72 mb-4' />
                <p className='text-sm mt-6'>Email Address</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-md p-2 mb-4 w-72"
                />
                <p className='text-sm'>Password</p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-md p-2 mb-4 w-72"
                />
                <p className='font-bold text-base mb-4 cursor-pointer'>Forgot password?</p>
                <button onClick={handleLoginClick} className="bg-black text-white py-2 px-4 h-12 rounded-full">
                    Login
                </button>
                <p className='mt-4 text-center'>Don't have an account? <a href='sign-up' className='underline font-bold'>Sign Up</a></p>
            </div>
        </div>
    );
};

export default Login;
