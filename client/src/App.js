//import { Route, Routes } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
//import './App.css';
import Register from "./pages/Register";
import Userlogin from "./pages/Userlogin"; 
import Home from "./pages/Home";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./style.scss";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element:  <div><Layout/></div>,
    children:[
      {
        path: "/" ,
        element:<Home/>
      },
      {
        path: "/post/:id" ,
        element:<Single/>
      },
      {
        path: "/write" ,
        element:<Write/>
      } 
    ]
  },
  {
    path: "/register",
    element:  <Register/>,
  },
  {
    path: "/login",
    element:  <Userlogin/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;
