import React from "react";
import { Menu } from "lucide-react";

const Navbar = ({ setIsOpen }) => {
  return (
    <div className="fixed top-0 left-0 md:hidden w-full z-30 bg-white dark:bg-gray-900 shadow-md h-14 flex items-center px-4">
      <button onClick={() => setIsOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
