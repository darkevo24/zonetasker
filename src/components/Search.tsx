// components/Search.tsx
import React from 'react';
import "../styles/home.css"

const Search: React.FC = () => {
    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle search functionality
        // You can add the logic to fetch search results here
    };

    function HandleSubmit() {
        window.location.href = "/tasks";
    }

    return (
        <div className='flex justify-center items-center bg-home md:px-20 py-20'>
            <div className='bg-white p-6 text-center md:w-6/12 w-10/12 rounded-xl flex flex-col items-center'>
                <div className='text-4xl font-bold p-4'>Find help in your neighborhood</div>
                <div className='text-2xl p-4'>Select a task and get matched with a background-checked and fully-vetted Tasker.</div>
                <form onSubmit={handleSearch} className="flex justify-center w-full my-4">
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        className="p-2 border border-gray-300 rounded-xl w-3/4"
                    />
                    <button onClick={HandleSubmit} type="submit" className="bg-black ml-2 text-white text-l p-2 rounded-xl px-10 py-4 ">
                        Get help today
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;
