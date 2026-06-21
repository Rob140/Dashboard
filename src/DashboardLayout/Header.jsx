import styles from "./header.module.css";

const Header = ({ onToggleMenu, className }) => {
  const headerClassName = [styles.header, className].filter(Boolean).join(" ");

  return <header className={headerClassName}></header>;
};

export default Header;
