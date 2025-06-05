import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';

const AuthLayOut = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className='py-4 w-11/12 mx-auto '>
            <Navbar></Navbar>

            </header>
            <main>
            <Outlet></Outlet>

            </main>
        </div>
    );
};

export default AuthLayOut;