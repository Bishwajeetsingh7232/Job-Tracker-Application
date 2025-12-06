import React, { useMemo } from "react";
import { useApplications } from "../contexts/ApplicationsContext.jsx";

const DashboardPage = () => {
  const { applications } = useApplications();

  const stats = useMemo(() => {
    const total = applications.length;
    const applied = applications.filter((a) => a.status === "Applied").length;
    const interview = applications.filter(
      (a) => a.status === "Interview Scheduled"
    ).length;
    const selected = applications.filter(
      (a) => a.status === "Selected"
    ).length;
    const rejected = applications.filter(
      (a) => a.status === "Rejected"
    ).length;

    const lastFive = [...applications]
      .sort(
        (a, b) =>
          new Date(b.appliedDate || 0) - new Date(a.appliedDate || 0)
      )
      .slice(0, 5);

    return { total, applied, interview, selected, rejected, lastFive };
  }, [applications]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold text-sky-400">Dashboard</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <SummaryCard title="Total" value={stats.total} />
        <SummaryCard title="Applied" value={stats.applied} />
        <SummaryCard title="Interview" value={stats.interview} />
        <SummaryCard title="Selected" value={stats.selected} />
        <SummaryCard title="Rejected" value={stats.rejected} />
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-3">Last 5 Applications</h3>
        {stats.lastFive.length === 0 ? (
          <p className="text-slate-400 text-sm">No applications yet.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {stats.lastFive.map((app) => (
              <li
                key={app.id}
                className="flex justify-between items-center bg-slate-950/60 border border-slate-800 rounded-md px-3 py-2"
              >
                <div>
                  <p className="font-medium">
                    {app.companyName} – {app.jobTitle}
                  </p>
                  <p className="text-xs text-slate-400">
                    {app.status} • {app.appliedDate || "N/A"}
                  </p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200">
                  {app.jobType}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value }) => (
  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 shadow-md hover:shadow-sky-500/10 transition-transform transform hover:-translate-y-0.5">
    <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
      {title}
    </p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default DashboardPage;
