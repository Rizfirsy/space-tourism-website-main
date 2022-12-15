import styles from "./App.module.css";
import Header from "./components/header/Header";

//TODO: configure react router
function App() {
  return (
    <article className={styles.home}>
      <Header />
    </article>
  );
}

export default App;
