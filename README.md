# Job Application Tracker (Frontend)

A responsive **Job Application Tracker** built with **React + Vite**, **React Router**, **Context API**, and **Tailwind CSS**.  
It allows a logged-in user to add, view, search, filter, sort, and paginate job applications, along with a summary dashboard.

This project is built as part of **Full Stack Development – Week 6 Assignment**.

---

## Features

### Authentication (Fake Auth)
- Login with email & password (frontend-only, no backend).
- Simple role-based login:
  - `hrmanager@gmail.com` → role: `manager`
  - Any other email → role: `user`
- Auth state managed via **Context API**.
- Protected routes using **React Router + PrivateRoute + Outlet + Navigate**.
- Logout support with state reset.

### Routes & Navigation

- `/` → Landing / Home Page  
- `/login` → Login Page  
- `/dashboard` → Summary Dashboard (**Protected**)  
- `/add-application` → Add Job Application Form (**Protected**)  
- `/applications` → Job Applications Table (**Protected**)  
- `*` → 404 – Page Not Found

Global **Navbar**:
- Home
- Dashboard
- Add Application
- Applications
- Login / Logout (based on auth state)

---

## Job Applications Management

### Add Application (Form)
Route: `/add-application`

Form fields:
- Company Name (required)
- Job Title (required)
- Job Type (Full-time / Internship / Part-time / Contract) – required
- Status (Applied / Interview Scheduled / Rejected / Selected) – required
- Location (required)
- Applied Date (date input)
- Notes (optional textarea)

Implementation:
- Single `formData` state object.
- Field-level validation with inline error messages (no alerts).
- On submit:
  - Validates required fields.
  - Adds application to a **global applications list** (Context).
  - Clears the form.
  - Shows a Tailwind-styled success message (`"Application added!"`).

### Applications Table (Search + Filter + Sort + Pagination)
Route: `/applications`

Columns:
- Company Name
- Job Title
- Job Type
- Status
- Location
- Applied Date
- Actions (Delete)

Features:
1. **Search**
   - Search by **company name or job title** (case-insensitive).

2. **Filter**
   - Filter by **Job Type** (All, Full-time, Internship, Part-time, Contract).
   - Filter by **Status** (All, Applied, Interview Scheduled, Rejected, Selected).

3. **Sorting**
   - Sort by **Company (A–Z)**.
   - Sort by **Applied Date (Newest → Oldest)**.
   - Reset sorting to default.

4. **Pagination**
   - Shows **5 applications per page**.
   - `Previous` / `Next` buttons with proper disable state.
   - Shows `Page X of Y` and count: `Showing N of M applications`.

5. **Actions (Bonus)**
   - Delete button per row to remove an application from global state.

---

## Dashboard Summary

Route: `/dashboard`

Shows summary cards using shared applications data:
- Total Applications
- Applied
- Interview Scheduled
- Selected
- Rejected

Also shows:
- **Last 5 applications** with:
  - Company – Job Title
  - Status
  - Applied Date
  - Job Type badge

---

## State Management

- **AuthContext**
  - `user` (null or `{ email, role }`)
  - `login(email, password)`
  - `logout()`
  - `isAuthenticated` (boolean)

- **ApplicationsContext**
  - `applications` (array of job applications)
  - `addApplication(application)`
  - `deleteApplication(id)`

Both contexts are provided at the root level in `main.jsx`.

---

## UI & Styling

- **Tailwind CSS (latest)** integrated with Vite.
- Dark, bluish theme using `bg-slate-*` and `text-slate-*` utilities.
- Animations:
  - Custom `animate-fade-in` class for page/card transitions.
  - Hover scale / lift on buttons and summary cards.
- Responsive layout:
  - Uses `max-w-6xl mx-auto` container.
  - Grid layouts for dashboard cards.
  - Responsive table container with `overflow-x-auto`.

---

## Tech Stack

- **Frontend:** React (with Vite)
- **Routing:** React Router DOM (v6)
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

---

## Project Structure

```text
src/
  main.jsx
  App.jsx
  index.css
  contexts/
    AuthContext.jsx
    ApplicationsContext.jsx
  components/
    Navbar.jsx
    PrivateRoute.jsx
  pages/
    HomePage.jsx
    LoginPage.jsx
    DashboardPage.jsx
    AddApplicationPage.jsx
    ApplicationsPage.jsx
    NotFoundPage.jsx

```
---
### Home Page
![Login Page](screenshots/HomePage.png)

### Login Page
![Login Page](screenshots/LoginPage.png)

### Applications Table
![Applications Table](screenshots/ApplicationPage.png)

### Dashboard Page
![Dashboard Summary](screenshots/DashboardPage.png)

### Add Application Page
![Dashboard Summary](screenshots/AddApplicationsPage.png)

---
Thanks
