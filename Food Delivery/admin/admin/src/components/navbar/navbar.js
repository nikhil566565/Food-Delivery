import React, { useState, useEffect } from 'react';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        setIsAuthenticated(false)
        navigate("/login")
    };
    return (
        <>
            <nav className="bg-white z-[9999] dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="flex flex-wrap items-center justify-between p-4">
                    <div className="flex justify-between md:order-2space-x-3  md:space-x-0 rtl:space-x-reverse">
                        
                        <Link to="/login" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                    </div>
                    {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                        </ul>
                    </div> */}
                    <button className='navbar-btn' onClick={handleLogout}>Logout</button>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
