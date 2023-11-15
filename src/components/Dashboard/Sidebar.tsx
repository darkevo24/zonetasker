import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <nav className="bg-gray-800 w-64 px-8 py-4 text-white relative">
            {/* Sidebar content */}
            <div className="text-2xl font-bold">Dashboard</div>
            <ul className="mt-4">
                <li onClick={() => { window.location.href = "/dashboard" }} className="py-2 cursor-pointer">Dashboard</li>
                <li onClick={() => { window.location.href = "/dashboard/profile" }} className="py-2 cursor-pointer">Profile</li>
            </ul>
            <button
                type="submit"
                className="mt-4 bg-gray-300 text-black px-6 py-2 rounded-md absolute bottom-10"
            >
                LogOut
            </button>

        </nav>
    );
};

export default Sidebar;
