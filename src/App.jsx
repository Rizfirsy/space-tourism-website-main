import styles from "./App.module.css";
import { Link } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout";

//TODO: configure react router
function App() {
  return (
    <MainLayout>
      <section className={styles.home}>
        <div className={styles.text}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className={styles.explore}>
          <Link href="/explore">Explore</Link>
        </button>
      </section>
    </MainLayout>
  );
}

export default App;
