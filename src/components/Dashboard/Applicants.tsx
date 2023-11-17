import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import ReactModal from 'react-modal';

interface Profile {
    name: string;
    positiveReviews: number;
    rate: string;
    about: string;
    image: string;
    online: boolean;
    numberReviews?: number;
}

const Applicants: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profiles, setProfiles] = useState<Profile[]>([
        {
            name: 'Jeffrey C.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 5,
            rate: '60.00',
            online: true,
            numberReviews: 5,
            about:
                "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
        },
        {
            name: 'Sarah W.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 4.5,
            rate: '20.00',
            online: false,
            numberReviews: 2,
            about:
                "I specialize in creating comfortable and visually appealing spaces. From designing room layouts to color palettes, I can transform your space.",
        },
    ]);

    const openModal = (profile: Profile) => {
        setSelectedProfile(profile);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProfile(null);
        setIsModalOpen(false);
    };

    const handleSendMessage = () => {
        // Add logic to handle sending the message (axios, API call, etc.)
        // ...
        closeModal();
    };

    return (
        <div className="bg-gray-100 p-8 text-xl">
            <Navbar />

            <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>

            <div className='md:w-[95%] flex justify-between md:flex-row flex-col-reverse'>
                <div className='w-full'>
                    {profiles.map((profile, index) => (
                        <div key={index} className='flex items-start bg-white rounded-lg mb-4 px-4 py-6 flex-col md:flex-row'>
                            <img className='rounded-full' width={100} src={profile.image} alt={profile.name} />
                            <div className='ml-3 mr-3'>
                                <h2 className='font-bold text-xl'>{profile.name}</h2>
                                <div className='flex items-center my-1'><img width={20} src={require("../../logo/star.png")}></img><p className='ml-2 mt-1'>{profile.positiveReviews} ({profile.numberReviews} Reviews)</p></div>
                                <p><strong>Message:</strong> {profile.about}</p>
                            </div>
                            <div className='flex flex-col justify-between h-full '>
                                <h1 className=''>Proposed rate : <span className="font-bold">${profile.rate}/hr</span></h1>
                                <button onClick={() => openModal(profile)} className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg mt-10`} ><span className='shadow-sm'>Send message</span></button>
                            </div>
                        </div>
                    ))}

                </div>

                <div className='p-6 md:w-5/12 md:h-[340px] bg-white rounded-lg md:ml-10 md:mb-0 mb-10'>
                    <p className='font-bold text-2xl'>Disclaimer</p>
                    <p className='text-lg my-4'>All messaging happens in between you and your tasker's mailbox (from your email provider) - we are working on internal messaging and escrow payment feautures.</p>
                    <p className='text-lg'>We will announce the features upon rollout in the upcoming weeks.</p>
                </div>
            </div>

            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-content mx-auto my-40 p-8 bg-white rounded-lg shadow-lg w-10/12 md:w-6/12"
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
                contentLabel="Send Message Modal"
            >
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>Send Message to {selectedProfile?.name}</h2>
                    <p onClick={closeModal} className='text-3xl font-bold relative bottom-5 cursor-pointer'>x</p>
                </div>

                <textarea
                    rows={5}
                    placeholder="Type your message here..."
                    className='border border-black rounded-lg w-full mt-4 p-2'
                // Add value and onChange handlers for the message input
                />
                <div className='flex items-center justify-end mt-4'>
                    <button className={`bg-[#d4c414] px-12 py-3 font-bold rounded-lg`} onClick={handleSendMessage}>Send Message</button>
                </div>
            </ReactModal>

            <div className='h-40'></div>
        </div>
    );
};

export default Applicants;
