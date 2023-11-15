import React from 'react';
import Sidebar from './Sidebar';

const ProfileDashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className='w-full flex flex-1 justify-center items-center'>
                <div className="bg-white  p-8 rounded-lg shadow-md w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Profile</h2>
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-600">First Name</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Email</label>
                                <input
                                    type="email"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Mobile Phone</label>
                                <input
                                    type="tel"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Zip Code</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600">Current Password</label>
                                <input
                                    type="password"
                                    className="mt-1 p-2 border w-full rounded-md"
                                // Add necessary state and onChange handler
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-md"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;
