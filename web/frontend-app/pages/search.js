import Main from "../components/main2";
import ContentItems from "../components/content-items";
import Pagination from "../components/pagination1";
import Subscription from "../components/subscription";
import Footer from "../components/footer3";
import styles from "./search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Main />
      <section className={styles.mainContent}>
        <ContentItems />
      </section>
      <Pagination />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Search;
