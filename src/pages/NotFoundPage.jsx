import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-16 animate-fade-in">
      <h2 className="text-3xl font-bold text-rose-400">404</h2>
      <p className="text-slate-300">Page not found.</p>
      <Link
        to="/"
        className="px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-transform transform hover:-translate-y-0.5"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
