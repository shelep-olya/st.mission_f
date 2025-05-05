import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskCard from "../../components/TaskCard/TaskCard";
import UserStats from "../../components/UserStats/UserStats";
import BannerImg from "../../assets/Banner.svg";
const mockTasks = [
  { id: 1, title: "Task 1", description: "Do the first task" },
  { id: 2, title: "Task 2", description: "Another task to handle" },
  { id: 3, title: "Task 3", description: "Complete this one too" },
];
function DashboardPage() {
  return (
    <div style={{ display: "flex", flexDirection: 'column', height: "100vh", gap: '20px', width: '100dvw', overflow: "hidden", padding: "16px" }}>
      <div style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", gap: '20px' }}>

      <div style={{ flex: 1, overflowY: "auto"}}>
        <img
          src={BannerImg}
          alt="Description"
          style={{ width: "100%", objectFit: "cover", marginBottom: "16px" }}
        />
        {mockTasks.map((task) => (
          <div key={task.id} style={{ marginBottom: "16px", width: "100%" }}>
            <TaskCard title={task.title} description={task.description} />
          </div>
        ))}
      </div>

      <div style={{ flexShrink: 0 }}>
        <UserStats />
      </div>

      </div>
    </div>
  );
}

export default DashboardPage;
