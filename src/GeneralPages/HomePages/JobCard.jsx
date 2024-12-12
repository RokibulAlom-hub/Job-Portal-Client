import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id, title, salaryRange, requirements, location, hr_name, hr_email, description, company_logo,
        company, category, applicationDeadline
    } = job;
    return (
        <div className= "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={company_logo} alt={`${job.company} logo`} className="h-10 w-10 rounded-full mr-3" />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{company}</h3>
                </div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{location}</span>
            <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">{title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{applicationDeadline}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{description}</p>
            <p className="text-lg font-bold text-cyan-500 dark:text-cyan-400 mt-4">${salaryRange.min}/monthly</p>
            <Link to={`/jobdetails/${_id}`}>
            <button className="mt-4 w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg transition duration-300">
                Apply Now
            </button></Link>
        </div>
    );
};

export default JobCard;
