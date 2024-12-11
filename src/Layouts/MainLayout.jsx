import React from 'react';
import Navbar from '../SharedElements/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;