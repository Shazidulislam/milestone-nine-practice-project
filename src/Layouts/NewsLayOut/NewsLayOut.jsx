import React, { useEffect, useState } from 'react';
import Headers from '../../Components/Headers/Headers';
import RightAside from '../../homeLayout/RightAside/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NeswDetailsCard/NewsDetailsCard';

const NewsLayOut = () => {
   const {id} = useParams()
   const data = useLoaderData()
   const [news , setNews] = useState({})
    // find news data
   useEffect(()=>{
   const newsData = data.find(news => news.id == id)
   setNews(newsData)
   },[data , id])

    return (
        <>
            <header className=' pt-3'>
            <Headers></Headers>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 py-4'>
            <section className='col-span-9'>
                <h2 className='font-bold'>Drogon News</h2>
                 <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
                <RightAside></RightAside>
            </aside>
            </main>
        </>
    );
};

export default NewsLayOut;