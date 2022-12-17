import React from "react";
import styles from "./Destination.module.css";
import MainLayout from "../assets/layout/MainLayout";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";
import Navigation from "../components/navigations/destination/Navigation";

const Destination = () => {
  return (
    <MainLayout>
      <article className={styles.destination}>
        <div className={styles.container}>
          <section className={styles.title}>
            <h5>
              <span className={styles.pageNumber}>01</span>Pick your destination
            </h5>
          </section>
          <section className={styles.image}>
            <img src={moon} alt="moon" />
          </section>
          <section className={styles.text}>
            <Navigation />
            <div className={styles.description}>
              <h2>Moon</h2>
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
          </section>
        </div>
      </article>
    </MainLayout>
  );
};

export default Destination;
