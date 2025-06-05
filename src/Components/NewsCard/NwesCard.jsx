import React, { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
    const [readMore , setReadMore] = useState(false)
    // const [ lessMore , setLessMore] = useState(true)
  const {
    title,
    author,
    thumbnail_url,
    total_view,
    rating,
    details,
    // tags,
  } = news;
  const handleDeatilaRadMore=()=>{
    setReadMore(true)
  }

  const formattedDate = new Date( author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-xl bg-white shadow-md border rounded-md  mb-6 mt-8  border-gray-200">
        {/* profile */}
        <div className="flex  p-4 bg-base-300 justify-between">
       <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
        {/* avatar */}
        <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src={author.img} />
        </div>
        </div>
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-xs">{formattedDate}</p>
        </div>
       </div>
       <div className="text-gray-500 flex items-center justify-center gap-2">
        <FaRegBookmark size={20} />
        <CiShare2 size={20} />
       </div>
      </div>

      {/* title */}
       <div className="p-4">
         <h2 className="text-xl font-bold text-gray-700 mb-2">{title}</h2>
      {/* thumbnail url */}
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="rounded-xl w-full object-cover h-56 mb-4"
      />
      {/* details section */}
      {
        readMore ? 
         <p className="text-gray-600 text-sm mb-3 ">
            {details}
            <br />
            <span onClick={()=>setReadMore(false)} className="font-bold cursor-pointer hover:underline  text-[#FF8C47]">Read Less</span>
         </p> : 
         <p className="text-gray-600 text-sm mb-3 line-clamp-4">{details.length > 200 ?
    (<>
      {details.slice(0 ,200)}....
      <br />
      <span onClick={handleDeatilaRadMore} className="font-bold cursor-pointer hover:underline  text-[#FF8C47]">Read More</span>
      </>)
      :(details)}</p>
      }
    

  
      <div className="divider"></div>
      <div className="flex justify-between items-center text-sm text-gray-600">
      
        <div className="flex  justify-between gap-2 items-center text-orange-500">
            {
                Array.from({length:rating.number}).map((_,i)=>(
                    <FaStar key={i}></FaStar>
                ))
            }
            <span className="text-gray-600 ml-2 ">{rating.number}</span>
        </div>
        {/* view */}
        <span className="flex gap-2 items-center "> <IoEyeSharp size={24} />{total_view.toLocaleString()} views</span>
      
      </div>
 </div>
    </div>
  );
};

export default NewsCard;
