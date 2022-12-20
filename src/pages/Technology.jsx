import React from "react";
import styles from "./Crew.module.css";
import MainLayout from "../assets/layout/MainLayout";

const Crew = () => {
  return (
    <MainLayout>
      <article className={styles.technology}>
        <h1>You're on a technology page</h1>
      </article>
    </MainLayout>
  );
};

export default Crew;
