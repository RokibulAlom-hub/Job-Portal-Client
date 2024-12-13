import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Myapply = () => {
    const { email } = useParams();
    const [myapplys, setMyapplys] = useState([])
    console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyapplys(data)
            })
    }, [])
    return (
        <div>
                     <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Company name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Salary</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Joblocation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myapplys.map((d,id)=> <tr key={id}>
                                <td className="border border-gray-300 px-4 py-2">{id+1}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.company}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.salaryRange?.min} - ${d?.salaryRange?.max}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {d?.location}
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myapply;