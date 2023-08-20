import React from "react";
import "./Dashboard.css";
import Sidebar from "./SideBar/SideBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="main-container">
        <Sidebar />
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
