import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import NewsContent1 from "../components/news-content1";
import FooterNavigation from "../components/footer-navigation";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import styles from "./articles.module.css";

const Articles = () => {
  const router = useRouter();

  const onCountriesIconImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.articles}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header group4="pending_1087:1953" />
      <section className={styles.newsContentWrapper}>
        <NewsContent1 />
      </section>
      <FooterNavigation />
      <Newsletter />
      <Footer
        privacyPolicyTextDecoration="none"
        onHomeContentImageClick={onCountriesIconImageClick}
      />
    </div>
  );
};

export default Articles;
