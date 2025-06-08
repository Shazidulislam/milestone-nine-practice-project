import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {

    const {
     title,
    image_url,
    details,
    category_id
    } = news
    console.log(news)
    return (
        <div className='p-10 '>
            <img className='w-full h-[400px] rounded object-cover' src={image_url} alt="" />
            <h2 className='text-2xl font-semibold text-[#403F3F] pt-6'>{title}</h2>
            <p className='pt-3 text-[#706F6F]'>{details}</p>
            <Link className='btn bg-[#D72050] text-white mt-10' to={`/category/${category_id}`}>
            All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;


