import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut/HomeLayOut";


export const router =createBrowserRouter([
    {
      path:"/",
      Component:HomeLayOut
    },

])