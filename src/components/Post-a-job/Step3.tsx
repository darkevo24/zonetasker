import React, { ChangeEvent, useEffect, useState } from 'react';

interface SignUpProps {
    handleSignUp: (signupData: SignUpData) => void;
}

interface SignUpData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    mobilePhone: string;
    password: string;
    zipCode: string;
}

const Step3: React.FC<SignUpProps> = ({ handleSignUp }) => {
    const [signupData, setSignupData] = useState<SignUpData>({
        firstName: '',
        lastName: '',
        emailAddress: '',
        mobilePhone: '',
        password: '',
        zipCode: '',
    });

    const countryCodes = [
        { code: '+1', country: 'United States' },
        { code: '+44', country: 'United Kingdom' },
        { code: '+91', country: 'India' },
        // Add more country codes as needed
    ];

    const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

    const [isAgreed, setIsAgreed] = useState(false);

    const handleAgreementChange = () => {
        setIsAgreed(!isAgreed);
    };

    const handleCountryCodeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountryCode(e.target.value);
    };

    const handleInputChange = (key: string, value: string) => {
        setSignupData({ ...signupData, [key]: value });
    };

    const handleSignUpClick = () => {
        handleSignUp(signupData);
        window.location.href = '/post-a-job-step-4';
    };

    useEffect(() => {
        // Check if userEmail is not present in sessionStorage, then redirect to login
        const userEmail = sessionStorage.getItem('userEmail');
        if (!userEmail) {
            window.location.href = '/post-a-job-step-4';
        }

        const taskDescription = sessionStorage.getItem('taskDescription');
        if (!taskDescription) {
            window.location.href = '/post-a-job-step-1';
        }
    }, []);

    return (
        <div className='w-full bg-gray-100'>
            <div className='w-full bg-white flex items-center flex-col md:flex-row py-8 px-8'>
                <img onClick={() => { window.location.href = "/" }} src={require('../../logo/ZT.png')} alt='logo' width={230} className='absolute cursor-pointer' />
                <div className='flex items-center justify-center w-full text-white md:mt-0 mt-20'>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>1</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-500 w-12 h-12 rounded-xl flex items-center justify-center'>2</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-[#d4c414] w-12 h-12 rounded-xl flex items-center justify-center'>3</div>
                    <div className=' bg-gray-200 w-16 h-0.5'></div>
                    <div className='bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center'>4</div>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start md:px-10 px-3 py-20 justify-center">
                <div className='bg-white flex flex-col md:px-20 py-12 px-6 md:ml-32 rounded-lg'>
                    <img src={require("../../logo/ZT.png")} alt='Zonetasker' className='w-72 mb-4' />
                    <form action='/post-a-job-step-4' onSubmit={handleSignUpClick} className="flex flex-col">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={signupData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full mt-6"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={signupData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={signupData.emailAddress}
                            onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />
                        <div className='flex items-center w-72'>
                            <select
                                id="countryCode"
                                name="countryCode"
                                value={selectedCountryCode}
                                onChange={handleCountryCodeChange}
                                className="border rounded-md p-2 mb-4 w-20 h-[42px]"
                                required
                            >
                                {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {`(${country.code}) ${country.country}`}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                placeholder="Mobile Phone (with country code)"
                                value={signupData.mobilePhone}
                                onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                                className="border rounded-md p-2 mb-4 w-full ml-2"
                                required
                            />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={signupData.password}
                            onChange={(e) => handleInputChange('password', e.target.value)}
                            className="border rounded-md p-2 mb-4 w-72"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Zip Code"
                            value={signupData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />

                        <label className="flex items-center flex-row mb-4 w-72">
                            <input
                                type="checkbox"
                                checked={isAgreed}
                                onChange={handleAgreementChange}
                                className="mr-4"
                                required
                            />
                            <p className="text-black">
                                By signing up you agree to our <span className='font-bold underline'>Terms of Use</span> and <span className='font-bold underline'>Privacy Policy</span>
                            </p>
                        </label>

                        <button
                            disabled={!isAgreed} // Disable button if not agreed
                            className={`bg-black text-white py-2 px-4 rounded h-12 rounded-full ${!isAgreed ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Step3;
