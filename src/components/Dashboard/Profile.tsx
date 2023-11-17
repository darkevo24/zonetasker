import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const Profile: React.FC = () => {

    return (
        <div className="flex flex-col bg-gray-100 p-8">
            <Navbar />

            <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>
            <div className='p-6 px-8 flex items-start bg-white w-8/12'>
                <img
                    src={require("../../logo/profile.png")}
                    alt="Profile"
                    className="w-14 h-14 cursor-pointer"
                />
                <div className='flex items-center'>
                    <p className=''>Edit</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
