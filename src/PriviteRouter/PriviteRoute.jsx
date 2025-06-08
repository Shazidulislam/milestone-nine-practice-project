import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PriviteRoute = ({children}) => {

    const { loading , user} = use(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(user &&  user.email){
         return (children)
       
    }else{
         return <Navigate state={location.pathname} replace to={"/auth/login"}></Navigate>
    }
            
   
      
    
};

export default PriviteRoute;