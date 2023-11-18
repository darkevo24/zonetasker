import React from "react";

const Navbar: React.FC = () => {
    return (
        <div className="p-4 md:p-8 w-full bg-white rounded-lg flex flex-col md:flex-row items-center justify-between">
            <img
                onClick={() => {
                    window.location.href = "/dashboard";
                }}
                src={require("../../logo/ZT.png")}
                alt="Zonetasker"
                className="w-48 cursor-pointer mb-4 md:mb-0"
            />
            <div className="flex flex-col md:flex-row items-center">
                <p className="mr-4 md:mr-8 mb-2 md:mb-0 text-xl cursor-pointer hover:opacity-80">
                    My Tasks
                </p>
                <p className="mr-4 md:mr-8 mb-2 md:mb-0 text-xl cursor-pointer hover:opacity-80">
                    Post a job
                </p>
                <p className="mr-4 md:mr-8 mb-2 md:mb-0 text-xl cursor-pointer hover:opacity-80">
                    Marketplace
                </p>
                <img
                    src={require("../../logo/profile.png")}
                    alt="Profile"
                    className="w-10 h-10 cursor-pointer hover:opacity-80"
                />
            </div>
        </div>
    );
};

export default Navbar;
