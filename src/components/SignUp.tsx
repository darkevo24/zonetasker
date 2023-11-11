import React, { ChangeEvent, useState } from 'react';
import "../styles/signup.css";

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

const SignUp: React.FC<SignUpProps> = ({ handleSignUp }) => {
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
    };

    return (
        <div className="flex flex-col items-start md:px-10 px-3 py-20 justify-center signup">
            <div className='bg-white flex flex-col md:px-20 py-12 px-6 md:ml-32 rounded-lg'>
                <img src={require("../logo/ZT.png")} alt='Zonetasker' className='w-72 mb-4' />
                <input
                    type="text"
                    placeholder="First Name"
                    value={signupData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border rounded-md p-2 mb-4 w-full mt-6"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={signupData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border rounded-md p-2 mb-4 w-full"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={signupData.emailAddress}
                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    className="border rounded-md p-2 mb-4 w-full"
                />
                <div className='flex items-center w-72'>
                    <select
                        id="countryCode"
                        name="countryCode"
                        value={selectedCountryCode}
                        onChange={handleCountryCodeChange}
                        className="border rounded-md p-2 mb-4 w-20 h-[42px]"
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
                    />
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="border rounded-md p-2 mb-4 w-72"
                />
                <input
                    type="text"
                    placeholder="Zip Code"
                    value={signupData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="border rounded-md p-2 mb-4 w-full"
                />

                <label className="flex items-center flex-row mb-4 w-72">
                    <input
                        type="checkbox"
                        checked={isAgreed}
                        onChange={handleAgreementChange}
                        className="mr-4"
                    />
                    <p className="text-black">
                        By signing up you agree to our <span className='font-bold underline'>Terms of Use</span> and <span className='font-bold underline'>Privacy Policy</span>
                    </p>
                </label>

                <button
                    onClick={handleSignUpClick}
                    disabled={!isAgreed} // Disable button if not agreed
                    className={`bg-black text-white py-2 px-4 rounded h-12 rounded-full ${!isAgreed ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUp;
