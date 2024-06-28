import Header1 from "../components/header11";
import Content2 from "../components/content2";
import FrameComponent1 from "../components/frame-component11";
import FooterNavigation from "../components/footer-navigation1";
import styles from "./interviews.module.css";

const Interviews = () => {
  return (
    <div className={styles.interviews}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1761" />
      <Content2 />
      <FrameComponent1
        propPadding="0rem var(--padding-60xl) var(--padding-mini) var(--padding-59xl)"
        propGap="60px"
        propWidth="unset"
        propPadding1="0rem var(--padding-xl) 0rem var(--padding-2xl)"
        propAlignSelf="stretch"
        propPadding2="71px 23px 71px 20px"
      />
      <FooterNavigation propTextDecoration="unset" />
    </div>
  );
};

export default Interviews;
