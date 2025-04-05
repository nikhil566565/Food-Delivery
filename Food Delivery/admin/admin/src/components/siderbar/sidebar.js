import React, { useState } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            {/* Toggle Button (top-left, visible on all screens) */}
            <button
                onClick={toggleSidebar}
                type="button"
                className="toogle-btn-sidebar top-[78px] left-0 z-50 inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded-lg bg-trans shadow-md hover:bg-[#111827] dark:text-gray-400">
                <span className="sr-only">Toggle sidebar</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" clipRule="evenodd"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-[125px] left-0 z-40 w-64 h-full bg-gray-50 dark:bg-gray-800 rounded-lg transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/products" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addproduct" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Add Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/updateproduct" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <span className="ms-3">Update Product</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>

        </>
    )
}

export default Sidebar
