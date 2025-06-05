import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NwesCard from '../../Components/NewsCard/NwesCard';


const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [categoryNews , setCategoryNews]= useState([])

    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data)
            return;
        }
        else if(id == "1"){
             const filterNews = data.filter(news=>news.others.is_today_pick == true)
             setCategoryNews(filterNews)
        }else{
              const filterNews = data.filter(news=>news.category_id === parseInt(id))
        setCategoryNews(filterNews)
        }
     
    },[data,id])
    return (
        <div>
            <h2 className='font-bold'>Drogon News Home</h2>
            {
                categoryNews.map((news)=>(<NwesCard news={news} key={news.id}></NwesCard>))
            }
        </div>
    );
};

export default CategoryNews;