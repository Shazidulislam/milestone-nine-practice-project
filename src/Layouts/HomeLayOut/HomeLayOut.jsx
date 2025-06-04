import React from 'react';
import { Outlet } from 'react-router';
import Headers from '../../Components/Headers/Headers';

const HomeLayOut = () => {
    return (
        <div>
            <Headers></Headers>
            <main>
                <button className='btn btn-secondary'>Click more</button>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayOut;