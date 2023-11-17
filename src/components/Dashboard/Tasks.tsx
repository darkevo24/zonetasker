import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

interface Task {
    id: string;
    task: string;
    description: string;
    applicants: string;
}

const Tasks: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [tasks, setTasks] = useState<Task>({ id: '', task: '', description: '', applicants: '' });

    useEffect(() => {
        // Fetch tasks from the API
        axios.get(`https://zonetasker-be.vercel.app/api/tasks/${id}`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    return (
        <div className="bg-gray-100 p-8 text-xl">
            <Navbar />
            <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>

            <div className='md:w-[95%] flex justify-between md:flex-row flex-col-reverse'>
                <div className='w-full bg-white p-6'>
                    {tasks.id ? (
                        <div>
                            <h1 className="text-xl font-bold">{tasks.task}</h1>
                            <p className='mt-3'>{tasks.description}</p>
                            {/* <p className='mt-3'>If you are available tomorrow - please send me an applicant</p> */}
                            <div className='mt-20 flex items-center justify-end flex-col md:flex-row'>
                                <p>{tasks.applicants} applicants</p>
                                <button onClick={() => { window.location.href = "/dashboard/applicants/" + id }} className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg md:ml-8 text-lg`} ><span className='shadow-sm'>Review applicants</span></button>
                            </div>
                        </div>
                    ) : (
                        <p>No task found</p>
                    )}
                </div>

                <div className='p-6 md:w-5/12 md:mb-0 mb-10 bg-white h-48 rounded-lg md:ml-10'>
                    <p className='font-bold'>Date</p>
                    <p className='my-2'>N/A</p>
                    <p className='font-bold'>Time</p>
                    <p className='mt-2'>Between 10Am - 4PM</p>
                </div>
            </div>

            <div className='h-40'></div>
        </div>
    );
};

export default Tasks;
