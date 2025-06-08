import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
 const {user , signOutUser} = use(AuthContext)
//  const navigate = useNavigate()

    return (
        <div className='flex justify-between items-center'>
            <div className="">
                {
                    user && <p>{user.email}</p>
                }
            </div>
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
            <div className="login flex justify-center items-center gap-5">
                {
                    user ? <img src={user.photoURL} className='rounded-full w-12' alt="" />:    <img src="https://i.ibb.co/Qv7KhrQb/user.png" alt="" />
                }
            
              {
                user ?  <Link  onClick={()=> signOutUser()}
                  
                 className='btn px-10 text-white bg-[#403F3F]'>Log Out</Link> :  <Link to={"/auth/login"} className='btn px-10 text-white bg-[#403F3F]'>Log In</Link>
              }
            </div>
        </div>
    );
};

export default Navbar;