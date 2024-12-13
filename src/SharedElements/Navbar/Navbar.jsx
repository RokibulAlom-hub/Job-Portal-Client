import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navlogo from '../../assets/job-search .png'
import Logout from '../../GeneralPages/AuthPages/Logout';
import Authcontext from '../../Authcontext/Authcontext';
const Navbar = () => {
    const{user} = useContext(Authcontext)
    const navLinks = <div className='flex gap-2'>
        <div>
        <NavLink to='/'>Home</NavLink>
        </div>
            {
                user ?  <div className='flex gap-2' >
                    <NavLink to='/addjobs'>Addjobs</NavLink>
                    <NavLink to='/Mypostedjobs'>Mypostedjobs</NavLink>
                </div> : ""
            }
        
    </div>
    return (
        <div className='mx-auto w-11/12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            
                                {navLinks}
        
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer">
                    <img className=' w-[40px] ' src={navlogo}/>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='space-x-3'>
                        {navLinks}
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div>
                            <Logout></Logout>
                             </div>
                             : <div>
                                 <Link to='/register' className="btn">Register</Link >
                                 <Link to='/login' className="btn">Login</Link >
                             </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;