import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from './Pages/Register'
import Write from './Pages/Write'
import Single from './Pages/Single'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '../src/style.css'
const Layout=()=>
{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
        path:"/Write",
        element:<Write/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  
  {
    path: "/Single",
    element:<Single/>,
  },

  {
    path: "/Write",
    element: <Write/>,
  },

]);

function App() {
  return (
    <div className="App">

      <div className="container">
          <RouterProvider router={router}/>
      </div>


    </div>
  );
}

export default App;
