import React from "react";
import Header from "./Header";
import Sidebar from "./Seidbar";
// import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";

const DashboardLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Sidebar className={styles.bar} />
        <Header className={styles.headerBar} />
        <main className={styles.main}>
          {/* <Outlet /> */}
          outlet
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
