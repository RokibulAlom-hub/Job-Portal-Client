import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../GeneralPages/HomePages/Home';
import  Register from '../GeneralPages/AuthPages/Register';
import Login from '../GeneralPages/AuthPages/Login';
import Jobdetails from '../GeneralPages/DetailsPage/jobdetailspage/Jobdetails';
import PrivateRoute from './Privateroute/PrivateRoute';
import Jobapply from '../GeneralPages/DetailsPage/jobdetailspage/Jobapply';
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
            },
            {
               path:'/login',
               element:<Login></Login>
            },
            {
               path:'/jobdetails/:id',
               element:<PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>,
               loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
               path:'/jobapply/:id',
               element:<PrivateRoute><Jobapply></Jobapply></PrivateRoute>,
              
            },
        ]
    }
])