import Header from "./Components/Header";
import styles from "./App.module.css";
import Sidebar from "./Components/Sidebar";
import RecommendedVideos from "./Components/RecommendedVideos";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main__body}>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
