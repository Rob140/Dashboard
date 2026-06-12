import React from "react";
import Header from "./Header";
import Sidebar from "./Seidbar";
import { Outlet } from "react-router";
import styles from "./dashboard.module.css";

const DashboardLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Sidebar className={styles.bar} />
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
