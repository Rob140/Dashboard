// import { useState } from "react";
import { Link } from "react-router";
// import { CiSettings } from "react-icons/ci";
// import { SiSimpleanalytics } from "react-icons/si";

import styles from "./sidebar.module.css";

const Seidbar = () => {
  return (
    <aside>
      <ul className={styles.container}>
        <Link className={styles.Link}>
          <li className={styles.list}>overview</li>
        </Link>
        <Link to="analytics" className={styles.Link}>
          <li className={styles.list}>analytics</li>
        </Link>
        <Link to="users" className={styles.Link}>
          <li className={styles.list}>users</li>
        </Link>
        <Link to="reports" className={styles.Link}>
          <li className={styles.list}>reports</li>
        </Link>
        <Link to="settings" className={styles.Link}>
          <li className={styles.list}>settings</li>
        </Link>
        <Link to="helps" className={styles.Link}>
          <li className={styles.list}>help</li>
        </Link>
      </ul>
    </aside>
  );
};

export default Seidbar;
