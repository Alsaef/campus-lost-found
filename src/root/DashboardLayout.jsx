import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiBox, FiSearch, FiCheckCircle, FiHome } from 'react-icons/fi';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col">
                <div className="h-20 flex items-center justify-center border-b">
                    <span className="text-2xl font-bold text-blue-600">Campus Dashboard</span>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/dashboard/found" className="flex items-center p-2 rounded hover:bg-blue-50 transition">
                                <FiBox className="mr-3 text-blue-500" />
                                <span>Found</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/lost" className="flex items-center p-2 rounded hover:bg-blue-50 transition">
                                <FiSearch className="mr-3 text-blue-500" />
                                <span>Lost</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/claimed" className="flex items-center p-2 rounded hover:bg-blue-50 transition">
                                <FiCheckCircle className="mr-3 text-blue-500" />
                                <span>Claimed</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <Link to="/" className="flex items-center p-2 rounded hover:bg-blue-50 transition">
                                <FiHome className="mr-3 text-blue-500" />
                                <span>Home</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </aside>
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="h-20 bg-white shadow flex items-center px-8">
                    <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
                </header>
                {/* Page Content */}
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;