import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardHome from "./DashBoardHome/DashboardHome";
import Pets from "./Pets/Pets";
import ServicesPage from "./Services/Services";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default DashboardRoutes;
