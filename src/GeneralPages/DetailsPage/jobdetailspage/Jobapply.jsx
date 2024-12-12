import React from 'react';
import { useParams } from 'react-router-dom';
import userAuth from '../../../CustoomHooks/userAuth';

const Jobapply = () => {
    const { id } = useParams();
    console.log(id);
    
    const{user} = userAuth();
    const handleapply = (e) =>{
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value
        const Twitter = form.Twitter.value
        const Resume = form.Resume.value
        console.log();

        const applicantInfo = {
            jobId: id,
            userMail:user.email,
            linkedin,Twitter,Resume
        }
        fetch('http://localhost:5000/job-application',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(applicantInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            alert('user created ')
        }
        )
    }
    return (
        <div className='w-10/12 mx-auto min-h-screen'>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl my-4 font-bold text-center text-black mb-6">Apply</h2>
                    <form onSubmit={handleapply}>
                       
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Linkedin
                            </label>
                            <input
                                type="url"
                                name="linkedin"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Twitter
                            </label>
                            <input
                                type="url"
                                name="Twitter"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                            >
                                Resume
                            </label>
                            <input
                                type="url"
                                name="Resume"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                       

                        {/* Login Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Jobapply;