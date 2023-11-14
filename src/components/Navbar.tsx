import React from 'react';

const Navbar: React.FC = () => {
    function HandleSubmit() {
        window.location.href = "/";
    }

    return (
        <nav className="bg-white text-black p-4 text-2xl">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className='flex items-center justify-between w-full md:w-auto'>
                    <div onClick={HandleSubmit} className="text-4xl font-bold cursor-pointer">
                        <img className='ml-auto mr-auto block' width={230} alt='Zonetasker' src={require("../logo/ZT.png")} />
                    </div>
                    <p className='ml-6 text-base font-bold md:block hidden'>Tasker Directory</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0 md:flex-row flex-col">
                    <a href="/tasks" className="hover:text-gray-300 m-2 md:m-4 text-base font-bold">How to post a job</a>
                    <a href="/post-a-job-step-1" className="m-2 md:ml-5 hover:opacity-80 bg-[#d4c414] text-white rounded-lg w-48 h-14 flex justify-center items-center">Post a job</a>
                    <a href="/login" className="m-2 md:ml-5 hover:opacity-80 bg-black text-white w-48 h-14 flex justify-center items-center rounded-lg">Sign in</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
