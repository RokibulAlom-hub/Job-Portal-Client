import React, { useEffect, useState } from 'react';
import userAuth from '../../CustoomHooks/userAuth';

const MyPostedJobs = () => {
    const {user} = userAuth();
    const[myposted,setMyposted] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyposted(data)
        })
    },[user.email])
    return (
        <div>
                     <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Company name</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Deadline</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Joblocation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myposted.map((d,id)=> <tr key={id}>
                                <td className="border border-gray-300 px-4 py-2">{id+1}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.company}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{d?.applicationDeadline}</td>
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

export default MyPostedJobs;