import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUsOn from '../FindUsOn/FindUsOn';
import Qzoon from '../Qzoon/Qzoon';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Qzoon></Qzoon>
        </div>
    );
};

export default RightAside;