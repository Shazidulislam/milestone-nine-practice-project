import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut/HomeLayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";


export const router =createBrowserRouter([
    {
      path:"/",
      Component:HomeLayOut,
      children:[
        {
            index:true,
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
            Component:CategoryNews,
        }
      ]
      
    },
    {
        path:"/*",
        element:<h3>This is 404 no content</h3>
    }
   
    
])