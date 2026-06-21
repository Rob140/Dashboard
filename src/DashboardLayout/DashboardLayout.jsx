import React from "react";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Seidbar";
// import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={styles.layout}>
        <Sidebar className={styles.bar} isOpen={isSidebarOpen}  />
        <Header className={styles.headerBar} onToggleMenu={toggleSidebar} />
        <main className={styles.main}>
          {/* <Outlet /> */}
          outlet
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
