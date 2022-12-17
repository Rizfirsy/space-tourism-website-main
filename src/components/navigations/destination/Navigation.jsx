import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const navLinks = ["moon", "mars", "europa", "titan"];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} className={link === "moon" ? styles["active"] : ""}>
            <Link>{link.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
