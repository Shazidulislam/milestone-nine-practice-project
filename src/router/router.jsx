import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut/HomeLayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AuthLayOut from "../Layouts/AuthLayOut/AuthLayOut";


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
   
//    error page
    {
        path:"/*",
        element:<h3>This is 404 no content</h3>
    }
   
    
])