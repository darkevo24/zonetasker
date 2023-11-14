import React, { useState, useEffect } from 'react';

interface Profile {
    name: string;
    positiveReviews: number;
    rate: string;
    about: string;
    image: string;
}

const Step4: React.FC = () => {

    const [profiles, setProfiles] = useState<Profile[]>([
        {
            name: 'Jeffrey C.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 100,
            rate: '$60.00/hr',
            about:
                "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
        },
        {
            name: 'Sarah W.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 98,
            rate: '$20.00/hr',
            about:
                "I specialize in creating comfortable and visually appealing spaces. From designing room layouts to color palettes, I can transform your space.",
        },
        {
            name: 'Michael R.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 95,
            rate: '$45.00/hr',
            about:
                "Experienced in fixing household issues, I'll ensure your plumbing, electrical, and appliance repair needs are met efficiently and effectively.",
        },
    ]);

    const [showSortOptions, setShowSortOptions] = useState(false);

    const toggleSortOptions = () => {
        setShowSortOptions(!showSortOptions);
    };

    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <div className='w-full bg-white flex items-center py-8 px-8'>
                <img onClick={() => { window.location.href = "/" }} src={require('../../logo/ZT.png')} alt='logo' width={230} className='absolute cursor-pointer' />
                <div className='flex items-center justify-center w-full text-white'>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>1</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>2</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>3</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-[#d4c414] w-12 h-12 rounded-xl flex items-center justify-center'>4</div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center'>
                <div className='bg-white w-10/12 p-8 mt-8 rounded-lg flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold'>Congratulations! Your job has been posted.</h1>
                        <img src={require('../../logo/party-popper.png')} alt='step4' className='w-5 ml-2' />
                    </div>
                    <button onClick={() => { window.location.href = "/dashboard" }} className={`bg-[#d4c414] px-10 py-3 text-white rounded-lg`} ><span className='shadow-sm'>Go to dashboard</span></button>
                </div>
            </div>

            <div className='w-full flex flex-col items-center'>
                <div className='w-10/12 my-4 rounded-lg flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold'>Here are some taskers that fit your job description, you can invite them to apply for your task.</h1>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center mb-8'>
                <div className='w-10/12 rounded-lg flex justify-between '>
                    <div className='p-6 w-3/12 bg-white rounded-lg'>
                        <p className="text-xl font-semibold mb-0">Sort</p>
                        <div className="relative">
                            <select className="bg-white w-full border rounded-lg mt-2 shadow-md px-2 py-1">
                                <option className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</option>
                                <option className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</option>
                                {/* Add more sorting options */}
                            </select>
                        </div>
                        <p className="text-xl font-semibold mb-0 mt-3">Price</p>
                        <div className="relative">
                            <select className="bg-white w-full border rounded-lg mt-2 shadow-md px-2 py-1">
                                <option className="p-2 hover:bg-gray-200 cursor-pointer">Option 1</option>
                                <option className="p-2 hover:bg-gray-200 cursor-pointer">Option 2</option>
                                {/* Add more sorting options */}
                            </select>
                        </div>
                        <div className='flex items-center mt-4 justify-between'>
                            <p className='font-bold'>Online</p>
                            <input type='checkbox' className='ml-2' />
                        </div>
                    </div>

                    <div className='w-10/12 ml-10'>
                        {profiles.map((profile, index) => (
                            <div key={index} className='flex items-center bg-white rounded-lg mb-4 px-4 py-6'>
                                <img className='rounded-full' width={100} src={profile.image} alt={profile.name} />
                                <div className='ml-3 mr-3'>
                                    <h2 className='font-bold text-xl'>{profile.name}</h2>
                                    <div className='flex items-center my-1'><img width={20} src={require("../../logo/star.png")}></img><p className='ml-2 mt-1'>{profile.positiveReviews}</p></div>
                                    <p><strong>Bio:</strong> {profile.about}</p>
                                </div>
                                <div className='flex flex-col justify-between h-full '>
                                    <h1 className='font-bold'>{profile.rate}</h1>
                                    <button className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg mt-5`} ><span className='shadow-sm'>Invite</span></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Step4;
