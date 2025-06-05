import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-4 text-[#706F6F]">
                <NavLink to={"/"}>
                    {
                        ({isActive})=>(
                            <span className={isActive ? "bg-base-100 underline rounded-md" :""}>Home</span>
                        )
                    }
                </NavLink>
                <NavLink to={"/about"}>
                    {
                        ({isActive})=>(
                            <span className={isActive ? "bg-base-100 underline rounded-md" :""}>About</span>
                        )
                    }
                </NavLink>
                <NavLink to={"/career"}>
                    {
                        ({isActive})=>(
                            <span className={isActive ? "bg-base-100 underline  rounded-md" :""}>Career</span>
                        )
                    }
                </NavLink>
            </div>
            <div className="login flex gap-5">
                <img src="https://i.ibb.co/Qv7KhrQb/user.png" alt="" />
                <Link to={"/auth/login"} className='btn px-10 text-white bg-[#403F3F]'>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;