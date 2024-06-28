import Header from "../components/header";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import StoryContainer from "../components/story-container";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <FrameComponent1 />
      <section className={styles.sectorsCountriesTitles}>
        <div className={styles.frameParent}>
          <div className={styles.latestArticlesWrapper}>
            <h2 className={styles.latestArticles}>Latest articles</h2>
          </div>
          <FrameComponent />
          <h2 className={styles.aroundTheWorld}>
            Around the world – independent stories
          </h2>
          <StoryContainer />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
