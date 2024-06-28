import { useCallback } from "react";
import Header1 from "../components/header13";
import FrameComponent2 from "../components/frame-component23";
import CountryHighlight from "../components/country-highlight";
import FrameComponent1 from "../components/frame-component13";
import NewsContent from "../components/news-content2";
import FrameComponent from "../components/frame-component8";
import Pagination from "../components/pagination1";
import Subscription from "../components/subscription";
import Footer from "../components/footer3";
import styles from "./swit.module.css";

const Swit = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={styles.swit}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1545" />
      <FrameComponent2 />
      <CountryHighlight
        belgium="Switzerland"
        whyBelgium="Why Switzerland"
        ranked12thInTheWorldInThe="Switzerland has the second highest per capita GDP in the world"
        strongPublicInvestmentWhi="First in the world in the 2022 Global Innovation Index"
        diversifiedAndIndustriali="Second in the world in the 2022 Global Competitiveness Report"
        multilingualAndSkilledWor="Third in the world in the 2022 Human Development Index"
        globalCompetitionAndDigit="The geopolitical tensions and elevated uncertainty"
        lowWorkforceParticipation="Reduced trade and investment"
        unbalancedPublicFinancesP="Digital revolution"
        highInflationErodingThePu="Tax haven stereotype"
        propPadding="40px 106px 46px"
        propGap="60px"
        propPadding1="0rem 0rem 0rem var(--padding-27xl)"
        propDisplay="unset"
        propMinWidth="unset"
        propMinHeight="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
      />
      <section className={styles.energyWrapper}>
        <div className={styles.energy}>
          <div className={styles.frameGroup}>
            <FrameComponent1 />
            <NewsContent
              newsImage="/frame-16-1@2x.png"
              propHeight="27.5rem"
              propFlex="unset"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <NewsContent
              newsImage="/frame-16@2x.png"
              propHeight="27.5rem"
              propFlex="unset"
              onNewsContentContainerClick={onFrameContainerClick}
            />
          </div>
          <div className={styles.frameContainer}>
            <FrameComponent
              frame16="/frame-16-4@2x.png"
              finance="ICT"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <div className={styles.frameDiv}>
              <FrameComponent
                frame16="/frame-16-5@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
              <FrameComponent
                frame16="/frame-16-4@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <FrameComponent
              frame16="/frame-16-8@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <div className={styles.frameParent2}>
              <FrameComponent
                frame16="/frame-16-9@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
              <FrameComponent
                frame16="/frame-16-8@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
            </div>
          </div>
          <div className={styles.frameParent3}>
            <FrameComponent
              frame16="/frame-16-12@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <div className={styles.frameParent4}>
              <FrameComponent
                frame16="/frame-16-13@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
              <FrameComponent
                frame16="/frame-16-12@2x.png"
                finance="Finance"
                propFlex="1"
                propHeight="unset"
                onNewsContentContainerClick={onFrameContainerClick}
              />
            </div>
          </div>
        </div>
      </section>
      <Pagination propPadding="0rem var(--padding-xl) var(--padding-8xl)" />
      <Subscription
        propAlignSelf="unset"
        propPadding="0rem var(--padding-37xl) var(--padding-8xl)"
        propWidth="88.813rem"
      />
      <Footer propTextDecoration="none" />
    </div>
  );
};

export default Swit;
