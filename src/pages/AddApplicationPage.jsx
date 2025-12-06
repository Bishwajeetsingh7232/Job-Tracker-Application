import React, { useState } from "react";
import { useApplications } from "../contexts/ApplicationsContext.jsx";

const initialFormData = {
  companyName: "",
  jobTitle: "",
  jobType: "",
  status: "",
  location: "",
  appliedDate: "",
  notes: "",
};

const AddApplicationPage = () => {
  const { addApplication } = useApplications();
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) newErrors.companyName = "Required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Required";
    if (!formData.jobType) newErrors.jobType = "Required";
    if (!formData.status) newErrors.status = "Required";
    if (!formData.location.trim()) newErrors.location = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    addApplication(formData);
    setFormData(initialFormData);
    setErrors({});
    setSuccessMsg("Application added!");
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4 text-sky-400">
        Add Job Application
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input
              name="companyName"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && (
              <p className="text-xs text-rose-400 mt-1">
                {errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Job Title</label>
            <input
              name="jobTitle"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            {errors.jobTitle && (
              <p className="text-xs text-rose-400 mt-1">{errors.jobTitle}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Job Type</label>
            <select
              name="jobType"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.jobType}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="Full-time">Full-time</option>
              <option value="Internship">Internship</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            {errors.jobType && (
              <p className="text-xs text-rose-400 mt-1">{errors.jobType}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              name="status"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="Applied">Applied</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Rejected">Rejected</option>
              <option value="Selected">Selected</option>
            </select>
            {errors.status && (
              <p className="text-xs text-rose-400 mt-1">{errors.status}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Location</label>
            <input
              name="location"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && (
              <p className="text-xs text-rose-400 mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Applied Date</label>
            <input
              type="date"
              name="appliedDate"
              className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={formData.appliedDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Notes (optional)</label>
          <textarea
            name="notes"
            rows={3}
            className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/20 transition-transform transform hover:-translate-y-0.5"
        >
          Add Application
        </button>

        {successMsg && (
          <p className="text-sm text-emerald-400 mt-2 animate-pulse">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddApplicationPage;
