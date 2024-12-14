import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../GeneralPages/HomePages/Home';
import  Register from '../GeneralPages/AuthPages/Register';
import Login from '../GeneralPages/AuthPages/Login';
import Jobdetails from '../GeneralPages/DetailsPage/jobdetailspage/Jobdetails';
import PrivateRoute from './Privateroute/PrivateRoute';
import Jobapply from '../GeneralPages/DetailsPage/jobdetailspage/Jobapply';
import Myapply from '../GeneralPages/DetailsPage/MyapplyPage/Myapply';
import AddJobs from '../GeneralPages/AddJobsPage/AddJobs';
import MyPostedJobs from '../GeneralPages/AddJobsPage/MyPostedJobs';
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
            {
               path:'/myapply/:email',
               element:<PrivateRoute><Myapply></Myapply></PrivateRoute>,
            },
            {
               path:'/addjobs',
               element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
            },
            {
               path:'/mypostedjobs',
               element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
            },
        ]
    }
])