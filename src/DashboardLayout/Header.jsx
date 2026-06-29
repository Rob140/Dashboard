import styles from "./header.module.css";

const Header = ({ prop }) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>Dashboard</div>
        <div className={styles.menu} onClick={prop}>
          🍔
        </div>
        <div className={styles.par}>
          <div className={styles.userMenu}>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Sign out</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
