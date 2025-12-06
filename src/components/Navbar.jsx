import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  const linkClasses =
    "px-3 py-1 rounded-md text-sm font-medium transition hover:bg-slate-800 hover:text-white";

  return (
    <header className="bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-lg font-semibold text-sky-400 tracking-tight hover:text-sky-300 transition"
        >
          Job Tracker
        </Link>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-slate-800 text-white" : "text-slate-200"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-slate-800 text-white" : "text-slate-200"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add-application"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-slate-800 text-white" : "text-slate-200"}`
            }
          >
            Add Application
          </NavLink>
          <NavLink
            to="/applications"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-slate-800 text-white" : "text-slate-200"}`
            }
          >
            Applications
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-xs sm:text-sm text-slate-300">
                {user?.email}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 rounded-md text-sm font-medium bg-rose-600 hover:bg-rose-500 text-white transition-transform transform hover:-translate-y-0.5"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-3 py-1 rounded-md text-sm font-medium bg-sky-600 hover:bg-sky-500 text-white transition-transform transform hover:-translate-y-0.5"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
