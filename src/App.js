import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import DashboardRoutes from "./components/Dashboard/DashboardRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/*"
          element={
            loggedIn ? (
              <DashboardLayout>
                <DashboardRoutes />
              </DashboardLayout>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
