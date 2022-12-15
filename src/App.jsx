import styles from "./App.module.css";
import Header from "./components/header/Header";
import { Link } from "react-router-dom";

//TODO: configure react router
function App() {
  return (
    <article className={styles.home}>
      <Header />
      <section>
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
          <Link href="/">Explore</Link>
        </button>
      </section>
    </article>
  );
}

export default App;
