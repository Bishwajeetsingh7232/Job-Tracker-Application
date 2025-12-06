import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-400">
          Job Application Tracker
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          Track all your job applications, manage statuses, and stay organized
          while applying for internships and full-time roles.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/login"
          className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium shadow-lg shadow-sky-500/20 transition-transform transform hover:-translate-y-0.5"
        >
          Get Started (Login)
        </Link>
        <Link
          to="/applications"
          className="px-5 py-2 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 font-medium transition"
        >
          View Applications
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
