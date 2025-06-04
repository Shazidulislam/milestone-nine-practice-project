import { format } from 'date-fns';
import React from 'react';
// import logo from '../assets/logo.png'
const Headers = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-10'>
          <img src={'https://i.ibb.co/TxfbwG23/logo.png'} alt="potho is not abilabile" />
          <p>Journalism Without Fear or Favour</p>
          <p className='font-medium'>{format(new Date() ,"EEEE, MMMM dd, YYY")}</p>
        </div>
    );
};

export default Headers;