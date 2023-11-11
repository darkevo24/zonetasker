// components/Profile.tsx
import React, { useState } from 'react';

interface Skill {
    name: string;
    rate: string;
}

interface Profile {
    name: string;
    positiveReviews: number;
    completedTasks: number;
    skills: Skill[];
    about: string;
    image: string;
}

const Profile: React.FC = () => {
    const [profiles, setProfiles] = useState<Profile[]>([
        {
            name: 'Jeffrey C.',
            image: require('../images/profile-photo.jpg'),
            positiveReviews: 100,
            completedTasks: 174,
            skills: [
                { name: 'Help Moving', rate: '$52.94/hr' },
                { name: 'Home Repairs', rate: '$52.94/hr' },
                { name: 'Furniture Assembly', rate: '$47.05/hr' },
            ],
            about:
                "I'm the right person for the job: I have supplies and resources available for helping you with your move ins, move outs and move aroun...",
        },
        {
            name: 'Sarah W.',
            image: require('../images/profile-photo.jpg'),
            positiveReviews: 98,
            completedTasks: 152,
            skills: [
                { name: 'Interior Design', rate: '$60.00/hr' },
                { name: 'Event Planning', rate: '$55.00/hr' },
                { name: 'Home Organization', rate: '$50.00/hr' },
            ],
            about:
                "I specialize in creating comfortable and visually appealing spaces. From designing room layouts to color palettes, I can transform your space.",
        },
        {
            name: 'Michael R.',
            image: require('../images/profile-photo.jpg'),
            positiveReviews: 95,
            completedTasks: 202,
            skills: [
                { name: 'Plumbing', rate: '$65.00/hr' },
                { name: 'Electrical Work', rate: '$60.00/hr' },
                { name: 'Appliance Repair', rate: '$55.00/hr' },
            ],
            about:
                "Experienced in fixing household issues, I'll ensure your plumbing, electrical, and appliance repair needs are met efficiently and effectively.",
        },
    ]);

    return (
        <div className='md:grid grid-cols-3 w-full md:px-20 py-10'>
            {profiles.map((profile, index) => (
                <div key={index} className="p-4 shadow-xl m-4 text-xl md:mt-0 mt-4">
                    <div className='flex items-center'>
                        <img src={profile.image} alt={profile.name} width={150} />
                        <div className='ml-4'>
                            <h3 className="text-3xl font-bold">{profile.name}</h3>
                            <p>{profile.positiveReviews}% positive reviews</p>
                            <p>{profile.completedTasks} completed tasks</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mt-4">Featured Skills</h3>
                        <ul>
                            {profile.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.name} {skill.rate}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4">I'm the right person for the job: {profile.about}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Profile;
