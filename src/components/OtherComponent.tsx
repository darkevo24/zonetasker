import React from 'react';

const OtherComponent: React.FC = () => {
    return (
        <div className='md:flex w-full bg-gray-100'>
            <div className='w-full p-6 flex flex-col justify-center items-center text-2xl'>
                <div className='w-3/4'>
                    <h1 className='font-bold'>Need work done?</h1>
                    <h3 className='my-2'>*It's easy. Describe your needs and get matched with top-rated local pros.</h3>
                    <p>*When life gets busy, you don’t have to tackle it alone. Get time back for what you love without breaking the bank.</p>
                </div>
            </div>
            <div className='w-full'>
                <img src={require("../images/box.jpg")} alt='box' className='w-full' />
            </div>
        </div>
    );
};

export default OtherComponent;