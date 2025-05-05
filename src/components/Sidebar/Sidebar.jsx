import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import AddIcon from "../../assets/Add.svg";

import DashboardIcon from "../../assets/Dashboard.svg";
import Logo from "../../assets/Logo.svg";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
      </div>

      <nav className="nav">
        <Link
          to="/dashboard"
          className={`nav-item ${
            location.pathname === "/dashboard" ? "active" : ""
          }`}
        >
          <span className="icon">
            <img src={DashboardIcon} alt="Dashboard" />
          </span>
          <span>Dashboard</span>
        </Link>

        <Link
          to="/create"
          className={`nav-item ${
            location.pathname === "/create" ? "active" : ""
          }`}
        >
          <span className="icon">
            <img src={AddIcon} alt="Add" />
          </span>
          <span>Create New</span>
        </Link>
      </nav>

      <footer className="footer">
        All Rights Reserved <span className="footer-span">|</span> Shelep Olha
      </footer>
    </div>
  );
};

export default Sidebar;
