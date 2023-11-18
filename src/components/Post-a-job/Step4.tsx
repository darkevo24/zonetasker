import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface Profile {
    name: string;
    positiveReviews: number;
    rate: string;
    about: string;
    image: string;
    online: boolean;
    numberReviews?: number;
}

interface PostData {
    taskTitle: string;
    taskDescription: string;
    selectedCategories: string[]; // Replace with the actual type of your categories
}

const Step4: React.FC = () => {

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
        {
            name: 'Michael R.',
            image: require('../../images/profile-photo.jpg'),
            positiveReviews: 4.8,
            rate: '45.00',
            online: true,
            numberReviews: 10,
            about:
                "Experienced in fixing household issues, I'll ensure your plumbing, electrical, and appliance repair needs are met efficiently and effectively.",
        },
    ]);

    const [initialProfiles, setInitialProfiles] = useState<Profile[]>(profiles);

    const [sortOption, setSortOption] = useState<string>('lowerToHigherStar');
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [onlineOnly, setOnlineOnly] = useState<boolean>(false);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value ? parseInt(event.target.value) : null;
        setMaxPrice(value);
    };

    const handleOnlineChange = () => {
        setOnlineOnly(!onlineOnly);
    };

    useEffect(() => {
        // Retrieve data from sessionStorage
        const taskTitle = sessionStorage.getItem('taskTitle');
        const taskDescription = sessionStorage.getItem('taskDescription');
        const selectedCategories = JSON.parse(sessionStorage.getItem('selectedCategories') || '[]') as string[];

        // Data to be sent to the backend
        const postData: PostData = {
            taskTitle: taskTitle || '',
            taskDescription: taskDescription || '',
            selectedCategories: selectedCategories || []
        };

        // Replace the URL with the actual backend API endpoint
        const backendApiUrl = 'https://zonetasker-be.vercel.app';

        if (taskTitle) {
            // Send data to the backend using Axios when the component mounts
            axios.post<any, AxiosResponse<PostData>>(`${backendApiUrl}/api/tasks`, {
                "task": taskTitle,
                "description": taskDescription,
                "applicants": 0,
                "categories": selectedCategories.toString()
            })
                .then((response) => {
                    // Handle success
                    toast.success('Data sent successfully');
                    sessionStorage.clear();
                    console.log(response);
                })
                .catch((error: AxiosError) => {
                    // Handle error
                    console.error('Error sending data to the backend', error);
                });
        }
    }, []);

    useEffect(() => {
        // Apply sorting logic based on the selected option
        let sortedProfiles = [...initialProfiles];

        if (sortOption === 'lowerToHigherStar') {
            sortedProfiles.sort((a, b) => a.positiveReviews - b.positiveReviews);
        } else if (sortOption === 'higherToLowerStar') {
            sortedProfiles.sort((a, b) => b.positiveReviews - a.positiveReviews);
        }

        // Preserve the original list to reapply filters
        let filteredProfiles = [...sortedProfiles];

        // Apply price filtering
        if (maxPrice !== null) {
            filteredProfiles = filteredProfiles.filter(profile => parseInt(profile.rate) <= maxPrice);
        }

        // Apply online filter
        if (onlineOnly) {
            filteredProfiles = filteredProfiles.filter(profile => profile.online);
        }

        // Set the state to the final filtered and sorted list
        setProfiles(filteredProfiles);
    }, [sortOption, maxPrice, onlineOnly, initialProfiles]);

    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <ToastContainer />
            <div className='w-full bg-white flex flex-col md:flex-row items-center py-8 px-8'>
                <img onClick={() => { window.location.href = "/" }} src={require('../../logo/ZT.png')} alt='logo' width={230} className='absolute cursor-pointer' />
                <div className='flex items-center justify-center w-full text-white md:mt-0 mt-20'>
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
                <div className='bg-white w-10/12 p-8 mt-8 rounded-lg flex items-center justify-between flex-col md:flex-row'>
                    <div className='flex items-center '>
                        <h1 className='text-2xl font-bold'>Congratulations! Your job has been posted.</h1>
                        <img src={require('../../logo/party-popper.png')} alt='step4' className='w-5 ml-2' />
                    </div>
                    <button onClick={() => { window.location.href = "/dashboard" }} className={`bg-[#d4c414] px-10 py-3 text-white rounded-lg md:mt-0 mt-3`} ><span className='shadow-sm'>Go to dashboard</span></button>
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
                <div className='w-10/12 rounded-lg flex justify-between flex-col md:flex-row '>
                    <div className='p-6 md:w-3/12 w-full bg-white rounded-lg h-72'>
                        <p className="text-xl font-semibold mb-0">Sort</p>
                        <div className="relative">
                            <select
                                value={sortOption}
                                onChange={handleSortChange}
                                className="bg-white w-full border rounded-lg mt-2 shadow-md px-2 py-1"
                            >
                                <option className="p-2 hover:bg-gray-200 cursor-pointer" value="lowerToHigherStar">Lower to higher star</option>
                                <option className="p-2 hover:bg-gray-200 cursor-pointer" value="higherToLowerStar">Higher to lower star</option>
                                {/* Add more sorting options */}
                            </select>
                        </div>
                        <p className="text-xl font-semibold mb-0 mt-3">Price</p>
                        <div className="flex items-center mt-2">
                            <input
                                type="number"
                                placeholder="Enter max price"
                                value={maxPrice !== null ? maxPrice : ''}
                                onChange={handleMaxPriceChange}
                                className="bg-white border rounded-lg shadow-md px-2 py-1"
                            />
                        </div>
                        <div className='flex items-center mt-4 justify-between'>
                            <p className='font-bold'>Online</p>
                            <input
                                type='checkbox'
                                checked={onlineOnly}
                                onChange={handleOnlineChange}
                                className='ml-2'
                            />
                        </div>
                    </div>

                    <div className='md:w-10/12 w-full md:ml-10 md:mt-0 mt-4'>
                        {profiles.map((profile, index) => (
                            <div key={index} className='flex items-center bg-white rounded-lg mb-4 px-4 py-6 flex-col md:flex-row'>
                                <img className='rounded-full' width={100} src={profile.image} alt={profile.name} />
                                <div className='ml-3 mr-3'>
                                    <h2 className='font-bold text-xl'>{profile.name}</h2>
                                    <div className='flex items-center my-1'><img width={20} src={require("../../logo/star.png")}></img><p className='ml-2 mt-1'>{profile.positiveReviews} ({profile.numberReviews} Reviews)</p></div>
                                    <p><strong>Bio:</strong> {profile.about}</p>
                                </div>
                                <div className='flex flex-col justify-between h-full '>
                                    <h1 className='font-bold'>${profile.rate}/hr</h1>
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
