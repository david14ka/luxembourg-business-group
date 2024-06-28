import Header from "../components/header1";
import Slider from "../components/slider";
import USAHighlight from "../components/u-s-a-highlight";
import Insights from "../components/insights";
import Newsletter from "../components/newsletter1";
import FooterNavigation from "../components/footer-navigation1";
import styles from "./u-s-a.module.css";

const USA = () => {
  return (
    <div className={styles.usa}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header />
      <Slider />
      <USAHighlight />
      <Insights />
      <div className={styles.footerSlider}>
        <div className={styles.sliderNavigation}>
          <div className={styles.previousParent}>
            <div className={styles.previous} />
            <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
          </div>
          <div className={styles.sliderPlaceholder}>
            <div className={styles.placeholder}>
              <b>1</b>
              <span className={styles.span}> 2 3 4 5 6 ... 98</span>
            </div>
          </div>
          <img
            className={styles.sliderNavigationChild}
            alt=""
            src="/group-28@2x.png"
          />
        </div>
      </div>
      <Newsletter />
      <FooterNavigation />
    </div>
  );
};

export default USA;
