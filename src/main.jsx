import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ApplicationsProvider } from "./contexts/ApplicationsContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApplicationsProvider>
          <App />
        </ApplicationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
