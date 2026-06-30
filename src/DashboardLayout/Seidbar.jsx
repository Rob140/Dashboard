// import { useState } from "react";
import { Link, NavLink } from "react-router";
// import { CiSettings } from "react-icons/ci";
// import { SiSimpleanalytics } from "react-icons/si";

import styles from "./sidebar.module.css";

const Seidbar = () => {
  return (
    <aside>
      <ul className={styles.container}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>overview</li>
        </NavLink>
        <NavLink
          to="analytics"
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>analytics</li>
        </NavLink>
        <NavLink
          to="users"
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>users</li>
        </NavLink>
        <NavLink
          to="reports"
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>reports</li>
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>settings</li>
        </NavLink>
        <NavLink
          to="helps"
          className={({ isActive }) =>
            `${styles.Link} ${isActive ? styles.active : ""}`
          }
        >
          <li className={styles.list}>help</li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default Seidbar;
