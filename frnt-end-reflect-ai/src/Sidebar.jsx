import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Notebook, BookOpen, BarChart, User, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Journal", to: "/", icon: <Notebook className="w-5 h-5" /> },
  { name: "Entries", to: "/entries", icon: <BookOpen className="w-5 h-5" /> },
  { name: "Insights", to: "/insights", icon: <BarChart className="w-5 h-5" /> },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const activeClass = "bg-gray-200 dark:bg-gray-700";

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "font-light"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-30 transform transition-transform",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0 md:static md:shadow-none",
          "font-light"
        )}
      >
        {/* Mobile Close Header */}
        <div className="flex justify-between items-center px-4 py-4 md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="flex flex-col h-[calc(100vh-3.5rem)] md:h-full px-4 py-4 overflow-y-auto">
          {/* Nav links */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700",
                (location.pathname === item.to ||
                  (item.to !== "/" && location.pathname.startsWith(item.to))) &&
                  activeClass
              )}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          {/* Spacer and Account at bottom */}
          <div className="mt-auto pt-4">
            <button className="flex items-center gap-2 p-2 rounded w-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <User className="w-5 h-5" />
              Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
