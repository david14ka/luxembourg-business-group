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
import styles from "./netherlands.module.css";

const Netherlands = () => {
  const router = useRouter();

  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  const onNewsItemOneContentClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div className={styles.netherlands}>
      <Header group4="pending_1087:1617" />
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
        germany="Netherlands"
        frame97="/frame-976@2x.png"
        whyGermany="Why Netherlands"
        secondInTheWorldInThe2022="Fourth in the world in the 2022 Global Innovation Index"
        globalLeaderInInnovationA="Highest English proficiency in the world, with nine out of every ten people speaking English as a second language"
        strongExportOrientedEcono="Netherlands is home to the International Court of Justice"
        highExportQuotaWhichRefle="Sixth in the world in the 2022 Global Competitiveness Report"
        digitalizationAndAutomati="Urgency of the transition to net zero"
        demographicChangeCouldRed="Aging-related fiscal pressures"
        globalizationAndExpositio="Pervasive labor shortages"
        phaseOutCoalIncreaseItsRe="Supporting and up skilling of the workforce"
        propPadding="0rem 0rem 0rem 7.187rem"
        propDisplay="unset"
        propMinWidth="unset"
        propPadding1="0rem var(--padding-7xs) 0rem 0rem"
        propDisplay1="unset"
        propMinWidth1="unset"
        propWidth="unset"
        propDisplay2="unset"
        propAlignSelf="stretch"
      />
      <section className={styles.newsContainerWrapper}>
        <div className={styles.newsContainer}>
          <div className={styles.newsItems}>
            <NewsItemContent
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16-1@2x.png"
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16@2x.png"
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
          </div>
          <div className={styles.newsItems1}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-4@2x.png"
              finance="ICT"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
            <div className={styles.frameGroup}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-5@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-4@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
              />
            </div>
          </div>
          <div className={styles.newsItems2}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-8@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
            <div className={styles.frameContainer}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-9@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-8@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
              />
            </div>
          </div>
          <div className={styles.newsItems3}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-12@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemOneContentClick}
            />
            <div className={styles.frameDiv}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-13@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-12@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemOneContentClick}
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

export default Netherlands;
