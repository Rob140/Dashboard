import styles from "./sidebar.module.css";

const Seidbar = ({ className }) => {
 

  return (
    <aside className={styles.sidebar}>
      {/* 1. Brand Identity */}
      <div className={styles.brand}>
        <div className={styles.brandIcon}></div>
        <span className={styles.brandName}>DevBoard</span>
      </div>

      {/* 2. Main Navigation Links */}
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/" className={`${styles.navLink} ${styles.active}`}>
              <span className={styles.linkIcon}></span>
              <span className={styles.linkText}>Dashboard</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/analytics" className={styles.navLink}>
              <span className={styles.linkIcon}></span>
              <span className={styles.linkText}>Analytics</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/settings" className={styles.navLink}>
              <span className={styles.linkIcon}></span>
              <span className={styles.linkText}>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. User Profile Section */}
      <div className={styles.userSection}>
        <div className={styles.profile}>
          <img src="avatar.jpg" alt="User Avatar" className={styles.avatar} />
          <div className={styles.userInfo}>
            <p className={styles.userName}>Alex Smith</p>
            <p className={styles.userRole}>Admin</p>
          </div>
        </div>
        <button className={styles.logoutButton}>
          <span className={styles.logoutIcon}></span>
        </button>
      </div>
    </aside>
  );
};

export default Seidbar;
