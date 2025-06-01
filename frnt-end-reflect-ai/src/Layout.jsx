import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-lexend">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Mobile Navbar */}
        <Navbar setIsOpen={setSidebarOpen} />

        {/* Page Content */}
        <main className="p-4 md:ml-0 mt-12 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
