import { useCallback } from "react";
import Header1 from "../components/header12";
import FrameComponent3 from "../components/frame-component32";
import Articles from "../components/articles1";
import Pagination from "../components/pagination";
import Footer from "../components/footer2";
import styles from "./research.module.css";

const Research = () => {
  const onReadMoreButtonClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={styles.research}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1665" />
      <section className={styles.slider6Wrapper}>
        <div className={styles.slider6}>
          <div className={styles.slide}>
            <div className={styles.slideContent}>
              <h1 className={styles.theForgeOf}>
                The Forge of Prosperity: Luxembourg's Steel Industry and Its
                Economic Impact
              </h1>
            </div>
            <div className={styles.slideDescription}>
              <h3 className={styles.luxembourgsSteelIndustry}>
                Luxembourg's steel industry has played a pivotal role in shaping
                the country's economic landscape. 
              </h3>
            </div>
            <div
              className={styles.readMoreButton}
              onClick={onReadMoreButtonClick}
            >
              <b className={styles.readMore}>{`Read more >`}</b>
            </div>
          </div>
          <div className={styles.slider6Inner}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-29.svg"
            />
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <Articles />
      <Pagination />
      <Footer propTextDecoration="none" />
    </div>
  );
};

export default Research;
