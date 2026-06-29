// import { useState } from "react";
// import { Link } from "react-router";
// import { CiSettings } from "react-icons/ci";
// import { SiSimpleanalytics } from "react-icons/si";

import styles from "./sidebar.module.css";

const Seidbar = () => {
  return (
    <aside>
      <ul className={styles.container}>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
        <div className={styles.Link}>
          <li className={styles.list}>overwiew</li>
        </div>
      </ul>
    </aside>
  );
};

export default Seidbar;
