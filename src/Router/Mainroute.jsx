import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../GeneralPages/HomePages/Home';
import  Register from '../GeneralPages/AuthPages/Register';
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'/register',
               element:<Register></Register>
            }
        ]
    }
])