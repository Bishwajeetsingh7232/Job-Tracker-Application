import React, { createContext, useContext, useState } from "react";

const ApplicationsContext = createContext(null);

export const ApplicationsProvider = ({ children }) => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      companyName: "Google",
      jobTitle: "Software Engineer",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-20",
      notes: "Referred by college senior.",
    },
    {
      id: 2,
      companyName: "Microsoft",
      jobTitle: "Software Engineer Intern",
      jobType: "Internship",
      status: "Interview Scheduled",
      location: "Hyderabad",
      appliedDate: "2025-11-18",
      notes: "Online assessment cleared.",
    },
    {
      id: 3,
      companyName: "Amazon",
      jobTitle: "SDE 1",
      jobType: "Full-time",
      status: "Rejected",
      location: "Bangalore",
      appliedDate: "2025-11-10",
      notes: "Rejected after second round.",
    },
    {
      id: 4,
      companyName: "Flipkart",
      jobTitle: "SDE 1",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-25",
      notes: "Referred through LinkedIn.",
    },
    {
      id: 5,
      companyName: "Zomato",
      jobTitle: "Frontend Developer",
      jobType: "Full-time",
      status: "Interview Scheduled",
      location: "Gurugram",
      appliedDate: "2025-11-22",
      notes: "Technical round scheduled.",
    },
    {
      id: 6,
      companyName: "Swiggy",
      jobTitle: "Backend Developer",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-19",
      notes: "",
    },
    {
      id: 7,
      companyName: "Paytm",
      jobTitle: "SDE Intern",
      jobType: "Internship",
      status: "Selected",
      location: "Noida",
      appliedDate: "2025-10-30",
      notes: "Offer accepted.",
    },
    {
      id: 8,
      companyName: "Razorpay",
      jobTitle: "Full Stack Developer",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-28",
      notes: "Remote friendly.",
    },
    {
      id: 9,
      companyName: "CRED",
      jobTitle: "Frontend Engineer",
      jobType: "Full-time",
      status: "Rejected",
      location: "Bangalore",
      appliedDate: "2025-10-15",
      notes: "Did not clear design round.",
    },
    {
      id: 10,
      companyName: "PhonePe",
      jobTitle: "SDE 1",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-27",
      notes: "",
    },
    {
      id: 11,
      companyName: "IBM",
      jobTitle: "Associate Developer",
      jobType: "Full-time",
      status: "Interview Scheduled",
      location: "Pune",
      appliedDate: "2025-11-05",
      notes: "HR round pending.",
    },
    {
      id: 12,
      companyName: "Infosys",
      jobTitle: "System Engineer",
      jobType: "Full-time",
      status: "Selected",
      location: "Mysore",
      appliedDate: "2025-09-25",
      notes: "Offer in hand.",
    },
    {
      id: 13,
      companyName: "TCS",
      jobTitle: "NQT - Developer",
      jobType: "Full-time",
      status: "Rejected",
      location: "Pan India",
      appliedDate: "2025-09-10",
      notes: "Rejected after NQT interview.",
    },
    {
      id: 14,
      companyName: "LinkedIn",
      jobTitle: "Software Engineer Intern",
      jobType: "Internship",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-26",
      notes: "Applied via careers portal.",
    },
    {
      id: 15,
      companyName: "Atlassian",
      jobTitle: "Grad Engineer",
      jobType: "Full-time",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-21",
      notes: "",
    },
    {
      id: 16,
      companyName: "Adobe",
      jobTitle: "Software Engineer",
      jobType: "Full-time",
      status: "Interview Scheduled",
      location: "Noida",
      appliedDate: "2025-11-12",
      notes: "System design round next week.",
    },
    {
      id: 17,
      companyName: "Uber",
      jobTitle: "Backend Engineer",
      jobType: "Full-time",
      status: "Applied",
      location: "Hyderabad",
      appliedDate: "2025-11-24",
      notes: "Referred by alum.",
    },
    {
      id: 18,
      companyName: "Ola",
      jobTitle: "Full Stack Engineer",
      jobType: "Full-time",
      status: "Rejected",
      location: "Bangalore",
      appliedDate: "2025-10-20",
      notes: "Rejected after OA.",
    },
    {
      id: 19,
      companyName: "Meesho",
      jobTitle: "Frontend Intern",
      jobType: "Internship",
      status: "Applied",
      location: "Bangalore",
      appliedDate: "2025-11-23",
      notes: "",
    },
    {
      id: 20,
      companyName: "Notion",
      jobTitle: "Product Engineer",
      jobType: "Full-time",
      status: "Applied",
      location: "Remote",
      appliedDate: "2025-11-29",
      notes: "International opportunity.",
    },
  ]);

  const addApplication = (application) => {
    setApplications((prev) => [...prev, { ...application, id: Date.now() }]);
  };

  const deleteApplication = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  return (
    <ApplicationsContext.Provider
      value={{ applications, addApplication, deleteApplication }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useApplications = () => useContext(ApplicationsContext);
