import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

interface SignUpData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    mobilePhone: string;
    password: string;
    zipCode: string;
    mobilePhoneCountryCode: string;
}


const Profile: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signupData, setSignupData] = useState<SignUpData>({
        firstName: '',
        lastName: '',
        emailAddress: '',
        mobilePhone: '',
        password: '',
        zipCode: '',
        mobilePhoneCountryCode: '',
    });
    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        axios.get('https://zonetasker-be.vercel.app/api/signup/' + userEmail).then((response) => {
            setSignupData(response.data);
            setEmail(response.data.emailAddress);
            setPassword(response.data.password);
        });
    }, [])
    return (
        <div className="flex flex-col bg-gray-100 p-8">
            <Navbar />

            <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>
            <div className='w-9/12'>
                <div className='p-6 px-8 flex items-start bg-white w-full rounded-lg'>
                    <div className='w-2/12 flex flex-col items-center'>
                        <img
                            src={require("../../logo/profile.png")}
                            alt="Profile"
                            className="w-20 h-20 cursor-pointer"
                        />
                        <div className='flex items-center justify-center'>
                            <p className=' font-bold text-lg'>Edit</p>
                            <img src={require("../../logo/edit.png")} alt="Edit" className="w-10 h-10 cursor-pointer" />
                        </div>
                    </div>
                    <div className='border border-black w-full'>
                        <div className='flex items-center p-2'>
                            <input
                                type='text'
                                className='w-full px-4 py-3 border border-black rounded-2xl text-gray-400'
                                value={email}
                                placeholder="Email address"
                                onChange={(e) => { setEmail(e.target.value) }}
                            ></input>
                            <button className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg ml-3`} ><span className='shadow-sm'>Change</span></button>
                        </div>
                        <div className='flex items-center p-2'>
                            <input
                                type='text'
                                className='w-full px-4 py-3 border border-black rounded-2xl text-gray-400'
                                value={password}
                                placeholder="Password ************"
                                onChange={(e) => { setPassword(e.target.value) }}
                            ></input>
                            <button className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg ml-3`} ><span className='shadow-sm'>Change</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
