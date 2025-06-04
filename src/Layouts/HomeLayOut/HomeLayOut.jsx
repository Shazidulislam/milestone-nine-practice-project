import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../../Components/Headers/Headers';
import LaytestNews from '../../Components/LaytestNews/LaytestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../homeLayout/LeftAsid/LeftAside';
import RightAside from '../../homeLayout/RightAside/RightAside';

const HomeLayOut = () => {
    return (
        <div>
            <header>
            <Headers></Headers>
            <section className='w-11/12 mx-auto my-4'>
                 <LaytestNews></LaytestNews>
            </section>
            <nav className='w-11/12 mx-auto mt-10'>
                <Navbar></Navbar>
            </nav>
            </header>
            {/* this is grid layout side */}
            <main className='w-11/12 mx-auto mt-20 grid grid-cols-4  space-x-5'>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-2">
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayOut;