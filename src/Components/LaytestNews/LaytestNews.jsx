import React from 'react';
import Marquee from 'react-fast-marquee';

const LaytestNews = () => {
    return (
        <div className='flex justify-start items-center gap-5 bg-[#F3F3F3] p-3'>
            <p className='px-3 py-2 font-medium bg-[#D72050] text-white'>Latest</p>
            <Marquee className='space-x-10' pauseOnHover={true} speed={70}>
                 <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                 <p className='font-bold '>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                 <p className='font-bold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
          
        </div>
    );
};

export default LaytestNews;