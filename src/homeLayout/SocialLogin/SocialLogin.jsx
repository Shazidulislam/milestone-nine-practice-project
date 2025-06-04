import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { VscGithub } from 'react-icons/vsc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'>Login With</h1>
            <div className='mt-6 space-y-4'>
             
                <button className='btn btn-outline w-full bg-base-100 text-[#D72050] hover:bg-[#D72050] hover:text-base-100'> <FcGoogle size={24} /> <span className=''> Login with google.</span></button>
                <button className='btn btn-outline w-full  bg-base-100 hover:bg-[#403F3F]  hover:text-base-100'> <VscGithub size={24} /><span>Login with github.</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;