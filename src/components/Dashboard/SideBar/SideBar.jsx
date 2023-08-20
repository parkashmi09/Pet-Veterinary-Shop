import React from "react";
import { Link } from "react-router-dom";
import "../SideBar/SideBar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard Menu</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/pets">Pets</Link>
        </li>
        <li>
          <Link to="/dashboard/services">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
