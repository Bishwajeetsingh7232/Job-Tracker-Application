import React, { useState, useMemo, useEffect } from "react";
import { useApplications } from "../contexts/ApplicationsContext.jsx";

const PAGE_SIZE = 5;

const ApplicationsPage = () => {
  const { applications, deleteApplication } = useApplications();

  const [searchTerm, setSearchTerm] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAndSorted = useMemo(() => {
    let data = [...applications];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (app) =>
          app.companyName.toLowerCase().includes(term) ||
          app.jobTitle.toLowerCase().includes(term)
      );
    }

    if (jobTypeFilter !== "All") {
      data = data.filter((app) => app.jobType === jobTypeFilter);
    }

    if (statusFilter !== "All") {
      data = data.filter((app) => app.status === statusFilter);
    }

    if (sortBy === "company") {
      data.sort((a, b) =>
        a.companyName.localeCompare(b.companyName, undefined, {
          sensitivity: "base",
        })
      );
    } else if (sortBy === "date") {
      data.sort(
        (a, b) =>
          new Date(b.appliedDate || 0) - new Date(a.appliedDate || 0)
      );
    }

    return data;
  }, [applications, searchTerm, jobTypeFilter, statusFilter, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / PAGE_SIZE) || 1;

  const currentPageData = filteredAndSorted.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleResetSorting = () => setSortBy("none");

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "prev") return Math.max(prev - 1, 1);
      if (direction === "next") return Math.min(prev + 1, totalPages);
      return prev;
    });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, jobTypeFilter, statusFilter, sortBy]);

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-semibold text-sky-400">
        Job Applications
      </h2>

      <div className="flex flex-wrap gap-3 items-center">
        <input
          placeholder="Search by company or job title"
          className="flex-1 min-w-[200px] rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={jobTypeFilter}
          onChange={(e) => setJobTypeFilter(e.target.value)}
        >
          <option value="All">All Job Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Internship">Internship</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          className="rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
          <option value="Selected">Selected</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSortBy("company")}
          className="px-3 py-1 rounded-md text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 transition"
        >
          Sort by Company (A–Z)
        </button>
        <button
          onClick={() => setSortBy("date")}
          className="px-3 py-1 rounded-md text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 transition"
        >
          Sort by Applied Date (Newest → Oldest)
        </button>
        <button
          onClick={handleResetSorting}
          className="px-3 py-1 rounded-md text-xs sm:text-sm border border-slate-700 hover:bg-slate-800 transition"
        >
          Reset Sorting
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/70 shadow-lg">
        <table className="w-full text-sm">
          <thead className="bg-slate-900">
            <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Job Title</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Applied Date</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-4 py-6 text-center text-slate-400"
                >
                  No applications found.
                </td>
              </tr>
            ) : (
              currentPageData.map((app) => (
                <tr
                  key={app.id}
                  className="border-t border-slate-800 hover:bg-slate-800/60 transition"
                >
                  <td className="px-4 py-3">{app.companyName}</td>
                  <td className="px-4 py-3">{app.jobTitle}</td>
                  <td className="px-4 py-3">{app.jobType}</td>
                  <td className="px-4 py-3">{app.status}</td>
                  <td className="px-4 py-3">{app.location}</td>
                  <td className="px-4 py-3">{app.appliedDate}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => deleteApplication(app.id)}
                      className="px-2 py-1 rounded-md text-xs bg-rose-600 hover:bg-rose-500 text-white transition-transform transform hover:-translate-y-0.5"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
        <span className="text-slate-400">
          Showing {currentPageData.length} of {filteredAndSorted.length}{" "}
          applications
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={
              currentPage === totalPages || filteredAndSorted.length === 0
            }
            className="px-3 py-1 rounded-md border border-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
