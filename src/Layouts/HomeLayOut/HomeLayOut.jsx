import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../../Components/Headers/Headers';
import LaytestNews from '../../Components/LaytestNews/LaytestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../homeLayout/LeftAsid/LeftAside';
import RightAside from '../../homeLayout/RightAside/RightAside';
import { useNavigation } from 'react-router';
import Loading from '../../Pages/Loading/Loading';

const HomeLayOut = () => {
    const {state} = useNavigation()
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
            <main className='w-11/12 mx-auto mt-20 grid grid-cols-4 gap-4  '>
                <aside className='sticky -top-10 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-2 ml-4 ">
                    {
                   
                        state=="loading" ? <Loading></Loading> : <Outlet></Outlet>
                    }
                </section>
                <aside className='sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayOut;