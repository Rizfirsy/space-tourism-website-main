import React, { Fragment } from "react";
import styles from "./MainLayout.module.css";
import Header from "../../components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>{children}</main>
    </Fragment>
  );
};

export default MainLayout;
