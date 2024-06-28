import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "../components/header13";
import FrameComponent2 from "../components/frame-component23";
import CountryHighlight from "../components/country-highlight";
import FrameComponent1 from "../components/frame-component13";
import NewsContent from "../components/news-content2";
import FrameComponent from "../components/frame-component8";
import Pagination from "../components/pagination1";
import Subscription from "../components/subscription";
import Footer from "../components/footer3";
import styles from "./belgium.module.css";

const Belgium = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div className={styles.belgium}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1569" />
      <FrameComponent2 />
      <CountryHighlight
        belgium="Belgium"
        whyBelgium="Why Belgium"
        ranked12thInTheWorldInThe="Ranked 12th in the world in the 2022 SJR - International Science Ranking"
        strongPublicInvestmentWhi="Strong public investment which enhances the productivity and resilience of the economy."
        diversifiedAndIndustriali="Diversified and industrialized economy, with competitive sectors such as services, biotechnology, transportation, and exports"
        multilingualAndSkilledWor="Multilingual and skilled workforce, with a high level of education and proficiency in French, Dutch, German, and English"
        globalCompetitionAndDigit="Global competition and digital disruption"
        lowWorkforceParticipation="Low workforce participation rate"
        unbalancedPublicFinancesP="Unbalanced public finances pose a risk to fiscal sustainability and credibility"
        highInflationErodingThePu="High inflation eroding the purchasing power of households and businesses"
      />
      <section className={styles.newsContainerWrapper}>
        <div className={styles.newsContainer}>
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
            <div className={styles.frameDiv} onClick={onFrameContainerClick}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/frame-16-4@2x.png"
              />
              <div className={styles.energyTechnologyPerspectivesParent}>
                <b className={styles.energyTechnologyPerspectives}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.rectangleDiv} />
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
            <div className={styles.frameParent1}>
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
          <div className={styles.frameParent2}>
            <FrameComponent
              frame16="/frame-16-8@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <div className={styles.frameParent3}>
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
          <div className={styles.frameParent4}>
            <FrameComponent
              frame16="/frame-16-12@2x.png"
              finance="Finance"
              propFlex="unset"
              propHeight="27.5rem"
              onNewsContentContainerClick={onFrameContainerClick}
            />
            <div className={styles.frameParent5}>
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

export default Belgium;
