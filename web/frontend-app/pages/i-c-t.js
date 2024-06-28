import { useCallback } from "react";
import Header1 from "../components/header11";
import Slider from "../components/slider";
import FrameComponent2 from "../components/frame-component21";
import NewsItemContainer1 from "../components/news-item-container1";
import NewsItemContainer from "../components/news-item-container";
import NewsColumn from "../components/news-column";
import FrameComponent1 from "../components/frame-component11";
import FooterNavigation from "../components/footer-navigation1";
import styles from "./i-c-t.module.css";

const ICT = () => {
  const onNewsItemWrapperClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={styles.ict}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1785" />
      <Slider propBackgroundImage="url('/slide@3x.png')" />
      <FrameComponent2 />
      <section className={styles.articcWrapper}>
        <div className={styles.articc}>
          <div className={styles.newsColumn}>
            <NewsItemContainer1
              newsItemImage="/frame-161@2x.png"
              onNewsItemWrapperClick={onNewsItemWrapperClick}
            />
            <NewsItemContainer
              newsItemWrapper="/frame-16-11@2x.png"
              theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
              aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
              onNewsItemWrapperClick={onNewsItemWrapperClick}
            />
            <NewsItemContainer
              newsItemWrapper="/frame-16@2x.png"
              theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
              aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onNewsItemWrapperClick}
            />
          </div>
          <div className={styles.newsColumn1}>
            <div className={styles.frameGroup} onClick={onNewsItemWrapperClick}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/frame-16-3@2x.png"
              />
              <div className={styles.newsItemContainer}>
                <b className={styles.energyTechnologyPerspectives}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min}>Posted 25 min ago</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <NewsItemContainer
                newsItemWrapper="/frame-16-1@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onNewsItemWrapperClick}
              />
              <NewsItemContainer
                newsItemWrapper="/frame-16-4@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onNewsItemWrapperClick}
              />
            </div>
          </div>
          <NewsColumn
            frame16="/frame-16-6@2x.png"
            onNewsItemWrapperClick={onNewsItemWrapperClick}
            onNewsItemWrapperClick={onNewsItemWrapperClick}
            onNewsItemWrapperClick={onNewsItemWrapperClick}
          />
          <div className={styles.newsColumn2}>
            <NewsItemContainer
              newsItemWrapper="/frame-16-91@2x.png"
              theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
              aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onNewsItemWrapperClick}
            />
            <div className={styles.frameDiv}>
              <NewsItemContainer
                newsItemWrapper="/frame-16-13@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onNewsItemWrapperClick}
              />
              <NewsItemContainer
                newsItemWrapper="/frame-16-12@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onNewsItemWrapperClick}
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <FooterNavigation propTextDecoration="none" />
    </div>
  );
};

export default ICT;
