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
        <div
          className={`${styles.Sidebar} ${isSidebarOpen ? styles.active : styles.open}`}
        >
          <Sidebar />
        </div>
        <div className={styles.header}>
          <Header prop={toggleSidebar} />
        </div>
        <main className={styles.main}>{/* <Outlet /> */}🍔 outlet</main>
      </div>
    </>
  );
};

export default DashboardLayout;
