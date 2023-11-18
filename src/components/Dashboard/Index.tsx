import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import "../../styles/dashboard.css";

interface Task {
  id: number;
  task: string;
  description: string;
  applicants: number;
}

const Dashboard: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const email = sessionStorage.getItem("userEmail");

  useEffect(() => {
    // Fetch tasks from the API
    axios.get(`https://zonetasker-be.vercel.app/api/tasks?email=${email}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  function HandleView(index: number) {
    window.location.href = `/dashboard/tasks/${index}`;
  }

  return (
    <div className="flex flex-col bg-gray-100 p-8">
      <Navbar />
      {isVisible && (
        <div className={`message-container ${isVisible ? "visible" : "hidden"}`}>
          <div className='bg-[#d4c414] w-full rounded-lg mt-8 pl-8 pr-6 py-2 flex items-center justify-between'>
            <p className='text-lg'>
              Welcome to your dashboard! For any help, take our{" "}
              <span className='font-bold underline cursor-pointer'>guided tour here</span>
            </p>
            <p className='font-bold cursor-pointer' onClick={handleClose}>
              X
            </p>
          </div>
        </div>
      )}

      <p className='py-6 px-2 text-xl font-bold'>Ongoing tasks</p>

      <div className="md:grid grid-cols-3 gap-4 md:w-10/12">
        {tasks.map((task, index) => (
          <div key={index} className=" bg-white rounded-lg p-6 md:mr-4 mb-4 md:mt-0 h-56 flex flex-col justify-between">
            <div>
              <p className="font-bold text-xl w-60">{task.task}</p>
              <p className='text-xl mt-2'>{task.applicants} Applicants</p>
            </div>
            <div className='flex items-center justify-end w-full'>
              <button onClick={() => HandleView(task.id)} className={`bg-[#d4c414] px-10 py-3 font-bold rounded-lg mt-8`} ><span className='shadow-sm'>View</span></button>
            </div>
          </div>
        ))}

        <div onClick={() => { window.location.href = "/post-a-job-step-1" }} className="bg-white rounded-lg p-6 md:mr-4 flex items-center justify-center flex-col h-56 hover:bg-opacity-50 cursor-pointer">
          <p className="font-bold text-xl cursor-pointer">Add New Task</p>
          <img src={require("../../logo/plus-button.png")} alt="Add new task" className="w-14 h-14 mt-3 cursor-pointer" />
        </div>
      </div>

      <div className='md:w-10/12 bg-white p-6 rounded-lg mt-8'>
        <p className='font-bold text-xl'>Browse the marketplace</p>
        <div className='md:flex items-center justify-between'>
          <p>View all available services in our directory</p>
          <button className={`border-[#d4c414] border-2 text-[#d4c414] px-10 py-2 font-bold rounded-full mt-2 md:mt-0`} ><span className='shadow-sm'>Go to marketplace</span></button>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
