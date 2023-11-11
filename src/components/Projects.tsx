// components/Projects.tsx
import React, { useState, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    // Add more properties for the project
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            title: 'Furniture Assembly',
            description: 'Avg. Project $22-$99',
            image: require('../images/furniture.jpg'),
        },
        {
            id: 2,
            title: 'Lawn Care & Maintenance',
            description: 'Avg. Project $30-$90',
            image: require('../images/lawn-care.jpg'),
        },
        {
            id: 3,
            title: 'Home Cleaning',
            description: 'Avg. Project $20-$80',
            image: require('../images/home-cleaning.jpg'),
        },
        {
            id: 4,
            title: 'Local Moving (under 50 miles)',
            description: 'Avg. Project $80-$300',
            image: require('../images/local-moving.jpg'),
        },
        {
            id: 5,
            title: 'Personal Training',
            description: 'Avg. Project $30-$100',
            image: require('../images/personal-training.jpg'),
        },
    ]);

    // Fetch projects from an API endpoint (simulated with useEffect)
    useEffect(() => {
        // Fetch projects from API and update state
        // Example: fetchProjects().then((data) => setProjects(data));
    }, []);

    return (
        <div className="p-20">
            <h2 className="text-3xl font-bold mb-4">Popular projects in your area</h2>
            <div className="md:grid grid-cols-4 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="text-center shadow-lg cursor-pointer rounded-lg md:mt-0 mt-4">
                        <img src={project.image} alt={project.title} className='w-full rounded-t-lg' />
                        <div className='p-6'>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className='text-gray-600 text-xl'>{project.description}</p>
                        </div>
                        {/* Other project details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
