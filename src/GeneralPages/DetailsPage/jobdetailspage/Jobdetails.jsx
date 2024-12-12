import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
  const [job, setJob] = useState({})
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then(res => res.json())
      .then(data => {
        setJob(data)
      })
  }, [])
  console.log(job, id);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img src={job?.company_logo} alt={`${job?.company} logo`} className="h-16 w-16 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{job?.title}</h1>
            <p className="text-gray-600 dark:text-gray-400">{job?.company} - {job?.location}</p>
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold text-cyan-500 dark:text-cyan-400">${job?.salaryRange?.min} - ${job?.salaryRange?.max}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">per year</p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Job Description</h2>
        <p className="text-gray-700 dark:text-gray-300">{job?.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {job?.requirements?.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {job?.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Category:</span> {job?.category}</p>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Job Type:</span> {job?.jobType}</p>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Application Deadline:</span> {job?.applicationDeadline}</p>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Status:</span> {job?.status}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Contact Information</h2>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">HR Name:</span> {job?.hr_name}</p>
        <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">HR Email:</span> <a href={`mailto:${job?.hr_email}`} className="text-cyan-500 dark:text-cyan-400 underline">{job?.hr_email}</a></p>
      </div>
      <div>
        <Link>
        
        </Link>
      </div>
    </div>


  );
};

export default JobDetails;
