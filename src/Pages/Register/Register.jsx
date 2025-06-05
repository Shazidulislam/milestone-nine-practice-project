import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
<div className='flex justify-center items-center min-h-screen '>
    
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-8 px-6">
      <div className="card-body">
      <h1 className="text-2xl font-semibold text-[#403F3F] text-center ">Register your account</h1>
        <div className='divider'></div>
        <fieldset className="fieldset">
          <label className="label font-bold text-[#403F3F]">Your Name</label>
          <input type="text" className="input w-full" placeholder="Your Name" />
          <label className="label font-bold text-[#403F3F]">Potho Url</label>
          <input type="text" className="input w-full" placeholder="Potho url" />
          <label className="label font-bold text-[#403F3F]">Email address</label>
          <input type="email" className="input w-full"  placeholder="Enter your email" />
          <label className="label  font-bold text-[#403F3F]">Password</label>
          <input type="password" className="input w-full" placeholder="Enter your password" />
          <button className="btn bg-[#403F3F] text-base-100 mt-4">Login</button>
            <span className='text-[#706F6F ] font-medium text-center pt-5'>Already have a account ?<Link  className="text-[#FF8C47] font-bold hover:underline" to={"/auth/login"}>Log In</Link></span>
         
        </fieldset>
      </div>
    </div>
</div>
    );
};

export default Register;