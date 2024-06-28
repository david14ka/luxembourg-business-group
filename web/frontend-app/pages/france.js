import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header2";
import FrameComponent2 from "../components/frame-component22";
import FrameComponent1 from "../components/frame-component12";
import NewsItemContent from "../components/news-item-content";
import ThirdNewsItem from "../components/third-news-item";
import FrameComponent from "../components/frame-component7";
import NewsNavigation from "../components/news-navigation";
import Newsletter from "../components/newsletter2";
import Footer from "../components/footer2";
import styles from "./france.module.css";

const France = () => {
  const router = useRouter();

  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  const onNewsItemContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div className={styles.france}>
      <Header group4="pending_1087:1593" />
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <FrameComponent2
        propBackgroundImage="url('/slider-content@3x.png')"
        onFrameContainerClick={onReadMoreContainerClick}
      />
      <FrameComponent1
        germany="France"
        frame97="/frame-977@2x.png"
        whyGermany="Why France"
        secondInTheWorldInThe2022="One of the largest markets in Europe, and access to the European single market"
        globalLeaderInInnovationA="39 universities in the top 1000 of the 2022 World University Rankings"
        strongExportOrientedEcono="Innovative business leaders, and a high-quality transportation infrastructure"
        highExportQuotaWhichRefle={`Leader in technology and innovation, with a strong R&D sector, a vibrant startup ecosystem`}
        digitalizationAndAutomati="Severe recession and increased public debt in France"
        demographicChangeCouldRed="Energy market disruption has led to higher energy prices and supply risks"
        globalizationAndExpositio="Competitiveness and productivity gap limiting potential growth and innovation"
        phaseOutCoalIncreaseItsRe="Social and territorial inequalities, which affect France’s cohesion and stability"
        propPadding="0rem 0rem 0rem var(--padding-10xl)"
        propDisplay="inline-block"
        propMinWidth="6.75rem"
        propPadding1="0rem var(--padding-7xs) 0rem 0rem"
        propDisplay1="inline-block"
        propMinWidth1="7.313rem"
        propWidth="unset"
        propDisplay2="unset"
        propAlignSelf="stretch"
      />
      <section className={styles.newsContainerWrapper}>
        <div className={styles.newsContainer}>
          <div className={styles.newsGrid}>
            <NewsItemContent
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16-1@2x.png"
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16@2x.png"
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
          </div>
          <div className={styles.newsGrid1}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-4@2x.png"
              finance="ICT"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
            <div className={styles.frameGroup}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-5@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-4@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
            </div>
          </div>
          <div className={styles.newsGrid2}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-8@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
            <div className={styles.frameContainer}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-9@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-8@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
            </div>
          </div>
          <div className={styles.newsGrid3}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-12@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemContainerClick}
            />
            <div className={styles.frameDiv}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-13@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-12@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemContainerClick}
              />
            </div>
          </div>
        </div>
      </section>
      <NewsNavigation />
      <Newsletter />
      <Footer propTextDecoration="none" />
    </div>
  );
};

export default France;
