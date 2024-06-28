import FrameComponent3 from "../components/frame-component31";
import Content1 from "../components/content1";
import Articles from "../components/articles";
import FrameComponent1 from "../components/frame-component11";
import FooterNavigation from "../components/footer-navigation1";
import styles from "./steel.module.css";

const Steel = () => {
  return (
    <div className={styles.steel}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <FrameComponent3 />
      <Content1 />
      <Articles />
      <FrameComponent1
        propPadding="0rem var(--padding-60xl) var(--padding-73xl) var(--padding-59xl)"
        propGap="77px"
        propWidth="78.75rem"
        propPadding1="0rem var(--padding-xl)"
        propAlignSelf="unset"
        propPadding2="71px 23px 71px 20px"
      />
      <FooterNavigation propTextDecoration="none" />
    </div>
  );
};

export default Steel;
