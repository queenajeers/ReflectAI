import { Outlet, NavLink } from "react-router-dom";
import { Plus, BookOpen, BarChart2, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-64 bg-white shadow p-4 space-y-4">
        {/* Mobile toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">My App</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`${open ? "block" : "hidden"} md:block space-y-4`}>
          <NavLink
            to="/items"
            className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700"
            onClick={() => setOpen(false)}
          >
            <Plus size={18} />
            New Entry
          </NavLink>

          <nav className="flex flex-col gap-2">
            <NavLink
              to="/"
              end
              className={navLinkStyles}
              onClick={() => setOpen(false)}
            >
              <BookOpen size={18} /> Entries
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkStyles}
              onClick={() => setOpen(false)}
            >
              <BarChart2 size={18} /> Insights
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-50 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
