import Header from "../components/header3";
import Footer1 from "../components/footer11";
import Footer from "../components/footer3";
import styles from "./policy.module.css";

const Policy = () => {
  return (
    <div className={styles.policy}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header
        group4="pending_1087:1809"
        homeLinkFlex="unset"
        homeLinkAlignSelf="stretch"
        homeLinkTop="0"
        homeLinkPosition="sticky"
      />
      <Footer1
        termsOfUse="Privacy Policy"
        propPadding="0rem var(--padding-47xl) var(--padding-2xl)"
        techDarajaShallNotBeLiablGap="39px"
        propPadding1="0rem var(--padding-2xl) 0rem var(--padding-xl)"
      />
      <Footer propTextDecoration="unset" />
    </div>
  );
};

export default Policy;
