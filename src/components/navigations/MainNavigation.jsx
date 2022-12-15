import React from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const navLinks = ["home", "destination", "crew"];

const MainNavigation = () => {
  return (
    <nav className={styles.mainNavigation}>
      <ul>
        {navLinks.map((link, index) => (
          <li>
            <Link to={`/${link}`}>
              <span className={styles.index}>0{index}</span>{" "}
              {link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
