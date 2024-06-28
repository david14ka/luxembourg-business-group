import { useCallback } from "react";
import Header from "../components/header2";
import FrameComponent2 from "../components/frame-component22";
import FrameComponent1 from "../components/frame-component12";
import NewsItemContent from "../components/news-item-content";
import ThirdNewsItem from "../components/third-news-item";
import FrameComponent from "../components/frame-component7";
import NewsNavigation from "../components/news-navigation";
import Newsletter from "../components/newsletter2";
import Footer from "../components/footer2";
import styles from "./germany.module.css";

const Germany = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  const onNewsItemDetailsClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div className={styles.germany}>
      <Header group4="pending_1087:1641" />
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <FrameComponent2 onFrameContainerClick={onFrameContainerClick} />
      <FrameComponent1
        germany="Germany"
        frame97="/frame-975@2x.png"
        whyGermany="Why Germany"
        secondInTheWorldInThe2022="Second in the world in the 2022 Bloomberg Innovation Index"
        globalLeaderInInnovationA="Global leader in innovation and technology"
        strongExportOrientedEcono="Strong export-oriented economy and manufacturing prowers"
        highExportQuotaWhichRefle="High export quota, which reflects its openness and integration in the global economy"
        digitalizationAndAutomati="Digitalization and automation could disrupt its labor market and industrial base"
        demographicChangeCouldRed="Demographic change could reduce labor force and increase its social spending"
        globalizationAndExpositio="Globalization and exposition to external shocks and competition"
        phaseOutCoalIncreaseItsRe="Phase out coal, increase its renewable energy sources, and promote green finance"
      />
      <section className={styles.newsContentWrapper}>
        <div className={styles.newsContent}>
          <div className={styles.newsItem}>
            <NewsItemContent onNewsItemDetailsClick={onNewsItemDetailsClick} />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16-1@2x.png"
              onNewsItemDetailsClick={onNewsItemDetailsClick}
            />
            <ThirdNewsItem
              thirdNewsItemContent="/frame-16@2x.png"
              onNewsItemDetailsClick={onNewsItemDetailsClick}
            />
          </div>
          <div className={styles.newsItem1}>
            <div className={styles.frameGroup} onClick={onNewsItemDetailsClick}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/frame-16-4@2x.png"
              />
              <div className={styles.secondNewsItemDetails}>
                <b className={styles.energyTechnologyPerspectives}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.secondNewsItemFooter}>
                  <div className={styles.secondNewsItemTypeIcon} />
                  <div className={styles.ictPostedContainer}>
                    <b>ICT</b>
                    <span className={styles.posted25Min}>
                      {" "}
                      - Posted 25 min ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-5@2x.png"
                finance="Finance"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-4@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
            </div>
          </div>
          <div className={styles.newsItem2}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-8@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemDetailsClick}
            />
            <div className={styles.frameDiv}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-9@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-8@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
            </div>
          </div>
          <div className={styles.newsItem3}>
            <FrameComponent
              thirdNewsItemImage="/frame-16-12@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsItemDetailsClick={onNewsItemDetailsClick}
            />
            <div className={styles.frameParent1}>
              <FrameComponent
                thirdNewsItemImage="/frame-16-13@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
              <FrameComponent
                thirdNewsItemImage="/frame-16-12@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsItemDetailsClick={onNewsItemDetailsClick}
              />
            </div>
          </div>
        </div>
      </section>
      <NewsNavigation />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Germany;
