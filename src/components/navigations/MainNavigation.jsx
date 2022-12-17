import React from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const navLinks = ["home", "destination", "crew", "technology"];

const MainNavigation = () => {
  return (
    <nav className={styles.mainNavigation}>
      <ul>
        {navLinks.map((link, index) => {
          let currentRoute;

          if (link === "home") {
            currentRoute = "/";
          } else {
            currentRoute = `/${link}`;
          }

          return (
            <li className={link === "home" ? styles["active"] : ""}>
              <Link to={currentRoute}>
                <span className={styles.index}>0{index}</span>{" "}
                {link.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavigation;
