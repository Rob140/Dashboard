import React from "react";
import styles from "./header.module.css";

const Header = ({ onToggleMenu }) => {
  return (
    <>
      <header className={styles.header}>
        {/* Linke Seite: Menü-Button & Branding für Mobilgeräte */}
        <div className={styles.leftSection}>
          <button
            className={styles.menuButton}
            onClick={onToggleMenu}
            aria-label="Menü öffnen"
          >
            {/* Hier kommt dein Menü-Icon rein (z.B. ein SVG oder ☰) */}
            <span className={styles.menuIcon}>☰</span>
          </button>
          <h1 className={styles.title}>Dashboard</h1>
        </div>

        {/* Rechte Seite: Suche, Benachrichtigungen & User-Info */}
        <div className={styles.rightSection}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}></span>
            <input
              type="text"
              placeholder="Suche..."
              className={styles.searchInput}
            />
          </div>

          <button
            className={styles.notificationButton}
            aria-label="Benachrichtigungen"
          >
            <span className={styles.notificationIcon}></span>
            <span className={styles.badge}>3</span>
          </button>

          <div className={styles.userDropdown}>
            <img
              src="avatar.jpg"
              alt="User Profil"
              className={styles.userAvatar}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
