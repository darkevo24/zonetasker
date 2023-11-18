import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import ReactModal from 'react-modal';

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
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [deletePassword, setDeletePassword] = useState<string>('');
    const [signupData, setSignupData] = useState<SignUpData>({
        firstName: '',
        lastName: '',
        emailAddress: '',
        mobilePhone: '',
        password: '',
        zipCode: '',
        mobilePhoneCountryCode: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        if (userEmail) {
            axios.get(`https://zonetasker-be.vercel.app/api/signup/${userEmail}`)
                .then((response: any) => {
                    const { first_name, last_name, email_address, password } = response.data.profile;
                    setSignupData({ firstName: first_name, lastName: last_name, emailAddress: email_address, password: password, mobilePhone: '', zipCode: '', mobilePhoneCountryCode: '' });
                    setEmail(email_address);
                    console.log(signupData);
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const Logout = () => {
        sessionStorage.removeItem('userEmail');
    }

    return (
        <div className="flex flex-col bg-gray-100 p-8">
            <Navbar />

            <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>
            <div className='md:w-9/12'>
                <div className='p-6 px-8 md:flex items-start bg-white w-full rounded-lg'>
                    <div className='md:w-2/12 flex flex-col items-center'>
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
                    <div className='w-full'>
                        <div className='flex items-center p-2 flex-col md:flex-row'>
                            <input
                                type='text'
                                className='w-full px-4 py-3 border border-black rounded-2xl text-gray-400'
                                value={email}
                                placeholder="Email address"
                                onChange={(e) => { setEmail(e.target.value) }}
                            ></input>
                            <button className={`bg-[#d4c414] md:mt-0 mt-2 px-10 py-3 font-bold rounded-lg md:ml-3`} ><span className='shadow-sm'>Change</span></button>
                        </div>
                        <div className='flex items-center p-2 flex-col md:flex-row'>
                            <input
                                type='text'
                                className='w-full px-4 py-3 border border-black rounded-2xl text-gray-400'
                                value={password}
                                placeholder="Password ************"
                                onChange={(e) => { setPassword(e.target.value) }}
                            ></input>
                            <button className={`bg-[#d4c414] md:mt-0 mt-2 px-10 py-3 font-bold rounded-lg md:ml-3`} ><span className='shadow-sm'>Change</span></button>
                        </div>
                        <div className='items-center p-2 flex'>
                            <p className='font-bold'>{signupData.firstName} {signupData.lastName}</p>
                            <div className='flex items-center cursor-pointer'>
                                <img src={require("../../logo/edit.png")} alt="Edit" className="w-10 h-10 cursor-pointer ml-3" />
                                <p>Edit name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-6 px-2 text-xl font-bold'>Settings</p>
            <div className='md:w-9/12'>
                <div className='p-6 px-8 flex items-start bg-white w-full rounded-lg flex-col'>
                    <div className=' text-lg font-bold w-full md:flex items-center'>
                        <p className='md:w-1/4'>City : </p>
                        <p className='w-full'>Halifax</p>
                        <div className='flex items-center cursor-pointer w-1/4'>
                            <img src={require("../../logo/edit.png")} alt="Edit" className="w-8 h-8 cursor-pointer" />
                            <p>Change</p>
                        </div>
                    </div>
                    <div className='text-lg font-bold w-full md:flex items-center mt-4'>
                        <p className='md:w-1/4'>Province : </p>
                        <p className='w-full'>Nova Scotia, CA</p>
                        <div className='flex items-center cursor-pointer w-1/4'>
                            <img src={require("../../logo/edit.png")} alt="Edit" className="w-8 h-8 cursor-pointer" />
                            <p>Change</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-9/12 mt-4'>
                <div className='p-4 px-4 flex items-start bg-white w-full rounded-lg'>
                    <p onClick={Logout} className='text-lg text-red-500 cursor-pointer hover:opacity-80'>Log out</p>
                </div>
            </div>
            <div className='md:w-9/12 mt-4'>
                <div className='p-4 px-4 flex items-start bg-white w-full rounded-lg'>
                    <p onClick={openModal} className='text-lg text-red-500 cursor-pointer hover:opacity-80'>Delete my account</p>
                </div>
            </div>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content mx-auto my-40 p-8 bg-white rounded-lg shadow-lg w-10/12 md:w-6/12 text-lg"
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
                contentLabel="Modal"
            >
                <p className='font-bold'>Delete your account?</p>
                <p className='w-96 mt-5'>Please enter your password to proceed with the account deletion procedure:</p>
                <input
                    type='text'
                    className='w-full px-4 py-2 border border-black rounded-2xl text-gray-400 mt-3'
                    value={deletePassword}
                    placeholder="Password ************"
                    onChange={(e) => { setDeletePassword(e.target.value) }}
                ></input>
                <div className='flex items-center justify-end mt-6'>
                    <button className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg ml-3`} ><span className='shadow-sm'>Delete my account</span></button>
                </div>
            </ReactModal>

        </div>
    );
};

export default Profile;
