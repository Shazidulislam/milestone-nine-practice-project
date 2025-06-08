import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut/HomeLayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayOut from "../Layouts/AuthLayOut/AuthLayOut";
import NewsLayOut from "../Layouts/NewsLayOut/NewsLayOut";
import PriviteRoute from "../PriviteRouter/PriviteRoute";
import Loading from "../Pages/Loading/Loading";


export const router =createBrowserRouter([
    // home layout
    {
      path:"/",
      Component:HomeLayOut,
      children:[
        {
            path:"/",
            Component:Home
        },
        {
            path:"/about",
            Component:About
        },
        {
            path:"/career",
            Component:Career,
        },
        {
            path:"/category/:id",
            loader:()=>fetch("../news.json"),
            Component:CategoryNews,
            hydrateFallbackElement:<Loading></Loading>
        }
      ]
      
    },
    // auth layout
    {
        path:"/auth",
        Component:AuthLayOut,
        children:[
             {
                    path:"/auth/login",
                    element:<Login></Login>
             },
            {
                   path:"/auth/register",
                  element:<Register></Register>
            }
    
        ]
    }

    ,
    {
        path:"/news-details/:id",
        loader: ()=> fetch("../news.json"),
        element:<PriviteRoute><NewsLayOut></NewsLayOut></PriviteRoute>,
        hydrateFallbackElement:<Loading></Loading>
    },
   
//    error page
    {
        path:"/*",
        element:<h3>This is 404 no content</h3>
    }
   
    
])