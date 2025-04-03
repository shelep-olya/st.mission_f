import "./Sidebar.css";
import AddIcon from "../../assets/Add.svg";
import TasksIcon from "../../assets/Tasks.svg";
import DashboardIcon from "../../assets/Dashboard.svg";
import Logo from "../../assets/Logo.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-icon" />
      </div>

      <nav className="nav">
        <a href="#" className="nav-item active">
          <span className="icon">
            <img src={DashboardIcon} alt="Dashboard" />
          </span>
          <span>Dashboard</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">
            <img src={TasksIcon} alt="My Assignments" />
          </span>
          <span>My Assignments</span>
        </a>
        <a href="#" className="nav-item">
          <span className="icon">
            <img src={AddIcon} alt="Add" />
          </span>
          <span>Create New</span>
        </a>
      </nav>

      <footer className="footer">
        All Rights Reserved <span className="footer-span">|</span> Shelep Olha
      </footer>
    </div>
  );
};

export default Sidebar;
