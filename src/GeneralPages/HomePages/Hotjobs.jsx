import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const Hotjobs = () => {
    const [alljobs,setAlljobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobs`)
        .then(res => res.json())
        .then(data => setAlljobs(data))
    },[])
    console.log(alljobs);
    
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>Hot Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    alljobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Hotjobs;
