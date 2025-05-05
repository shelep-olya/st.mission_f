import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateNewForm from "../../components/CreateNewForm/CreateNewForm";
import BannerImg from "../../assets/Banner.svg";
function CreateNewPage() {
  return (
    <div style={{ display: "flex", flexDirection: 'column', height: "100vh", gap: '20px', width: '100dvw', overflow: "hidden", padding: "16px" }}>
      <Sidebar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          height: 700,
          flexDirection: "row-reverse",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <img
          src={BannerImg}
          alt="Description"
          style={{ width: 'calc(100dvw - 560px)', objectFit: "contain", borderRadius: "12px" }}
        />

        <CreateNewForm />
      </div>
    </div>
  );
}

export default CreateNewPage;
