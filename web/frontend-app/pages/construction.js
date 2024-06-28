import { useCallback } from "react";
import Header1 from "../components/header12";
import FrameComponent2 from "../components/frame-component22";
import Content from "../components/content3";
import ArticlePreview from "../components/article-preview";
import Pagination from "../components/pagination";
import Footer from "../components/footer2";
import styles from "./construction.module.css";

const Construction = () => {
  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div className={styles.construction}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1689" />
      <FrameComponent2
        propBackgroundImage="url('/slide3@3x.png')"
        onFrameContainerClick={onReadMoreContainerClick}
      />
      <Content />
      <ArticlePreview />
      <Pagination />
      <Footer propTextDecoration="none" />
    </div>
  );
};

export default Construction;
