import React from 'react';
import Navbar from '../SharedElements/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedElements/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='mx-auto w-11/12'> 
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;