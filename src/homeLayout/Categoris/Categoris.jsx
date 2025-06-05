import React, { use } from 'react';
import { NavLink } from 'react-router';

    const categoryPromise= fetch("../categories.json")
    .then(res=>res.json())

const Categoris = () => {

    const categories = use(categoryPromise)
    
    return (
        <div>
            <h1 className='font-bold'>All Category</h1>
          <div className='w-10/12 mx-auto'>
              <button className='btn w-full mt-8  bg-slate-300'>National News</button>
          </div>
            <nav className='grid grid-cols-1 mt-5 gap-3  '>
                {
                    categories.map(category => <NavLink 
                         key={category.id} 
                         className="btn bg-base-100 border-0 font-bold shadow-sm hover:bg-base-300 text-[#9F9F9F]"
                         to={`/category/${category.id}`}
                    >
                      {category.name}
                    </NavLink>)
                }
            </nav>
        </div>
    );
};

export default Categoris;