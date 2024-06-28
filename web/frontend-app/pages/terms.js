import Header from "../components/header3";
import Footer1 from "../components/footer11";
import Footer from "../components/footer3";
import styles from "./terms.module.css";

const Terms = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <section className={styles.headerParent}>
        <Header
          group4="pending_1087:1833"
          homeLinkFlex="unset"
          homeLinkAlignSelf="stretch"
          homeLinkTop="0"
          homeLinkPosition="sticky"
        />
        <Footer1 termsOfUse="Terms of use" />
      </section>
      <Footer propTextDecoration="none" />
    </div>
  );
};

export default Terms;
