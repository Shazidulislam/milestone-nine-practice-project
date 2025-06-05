import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUsOn = () => {
    return (
        <div className=''>
            <h2 className='font-bold text-2xl mb-5 text-[#403F3F]'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full  ">
                <button className="btn join-item justify-start bg-base-100">
                    <FaFacebook/>
                    Facebook
                    </button>
                <button className="btn join-item justify-start bg-base-100">
                    <FaTwitter/> Twitter</button>
                <button className="btn join-item justify-start bg-base-100">
                    <FaInstagram/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;