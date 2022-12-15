import React from "react";
import styles from "./Header.module.css";
import MainNavigation from "../navigations/MainNavigation";
import logo from "../../assets/shared/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="space-tourism" />
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
