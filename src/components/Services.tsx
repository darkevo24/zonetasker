import React, { useState } from 'react';
import "../styles/services.css";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    // Add more properties for the project
}

const Services: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['Training', 'Furniture', 'Moving', 'Home repairs', 'Construction', 'Appliance repair', 'Cleaning', 'Event planning', 'Home organization'];
    const [selectedCategory, setSelectedCategory] = useState('');

    const initialProjects: Project[] = [
        {
            id: 1,
            title: 'Furniture Installation & repairs',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/furniture.jpg'),
            category: 'Furniture',
        },
        {
            id: 2,
            title: 'Construction work',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/construction.jpg'),
            category: 'Construction',
        },
        {
            id: 3,
            title: 'House Cleaning',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/home-cleaning.jpg'),
            category: 'Cleaning',
        },
        {
            id: 4,
            title: 'Plumbing',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/plumbing.jpg'),
            category: 'Plumbing',
        },
        {
            id: 5,
            title: 'Event coordinator',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/event.jpg'),
            category: 'Event coordinator',
        },
        {
            id: 6,
            title: 'Cooking',
            description: 'Browse throught our catalog of taskers who are certified for furniture repairs and assembly',
            image: require('../images/cooking.avif'),
            category: 'Cooking',
        },
    ];

    const [projects, setProjects] = useState<Project[]>(initialProjects);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const filteredProjects = initialProjects.filter((project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProjects(filteredProjects);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        if (category === '') {
            setProjects(initialProjects);
        } else {
            const filteredByCategory = initialProjects.filter((project) => project.category === category);
            setProjects(filteredByCategory);
        }
    };

    return (
        <>
            <div className='bg-yellow h-60 w-full flex flex-col justify-center md:pl-40 pl-10'>
                <h3 className='text-4xl font-bold'>Explore taskers in your area.</h3>
                <p className='text-xl mt-2'>Find the right person or business to take care of your task.</p>
            </div>
            <div className="md:p-6 p-2 flex md:flex-row flex-col">
                <div className="md:w-1/4 pr-6 text-left flex flex-col items-end mr-4">
                    <div>
                        <h1 className='text-2xl font-bold'>Browsed By Categories</h1>
                        <ul className='mt-6'>
                            {categories.map((category, index) => (
                                <li className={`cursor-pointer m-2 my-3 ${selectedCategory === category ? 'text-blue-500' : ''}`} key={index} onClick={() => handleCategoryClick(category)}>{category}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-8/12 ml-8">
                    <div className='flex items-center p-4 bg-gray-200 md:h-20 h-32'>
                        <form onSubmit={handleSearch} className="md:flex items-center justify-center w-3/4 ml-4">
                            <input
                                type="text"
                                placeholder="Search tasks..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 border border-gray-300 rounded-l w-full"
                            />
                            <button type="submit" className="bg-[#107c5c] text-white px-4 py-2 rounded-r mt-2 md:mt-0">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="py-4">
                        <h2 className="text-3xl font-bold mb-4">Popular projects in your area</h2>
                        <div className="md:grid grid-cols-3 gap-4">
                            {projects.map((project) => (
                                <div key={project.id} className="md:mt-0 mt-4 text-left shadow-lg cursor-pointer rounded-lg">
                                    <div className='h-32'>
                                        <img src={project.image} alt={project.title} className='w-full rounded-t-lg' style={{ objectFit: "cover", height: "100%" }} />
                                    </div>
                                    <div className='p-6'>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className='text-gray-600 text-l'>{project.description}</p>
                                        <p className='mt-4'>Browse</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* Your search results go here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
