import styles from "./header.module.css";
import { CiMenuBurger } from "react-icons/ci";

const Header = ({ prop }) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>D</div>
        <div className={styles.menu} onClick={prop}>
          <CiMenuBurger />
        </div>
        <div className={styles.userMenu}>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
