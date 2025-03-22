import './App.css';
import Menu from './Pages/Menu/menu'
import Contact from './Components/Contact/contact'
// import Menu from './Pages/Menu/menu'
import AboutUs from './Pages/AboutUs/AboutUs'
import Error from './Components/Error'
import Home from './Pages/home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Home /></>
    },
    {
      path: '/menu',
      element: <><Menu /></>
    },
    {
      path: '/aboutus',
      element: <><AboutUs /></>
    },
    {
      path: '/contact',
      element: <><Contact /></>
    },
    { path: '/*', element: <><Error /></> }
  ])
  return (
    <>
      {/* <Navbar/>  */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
