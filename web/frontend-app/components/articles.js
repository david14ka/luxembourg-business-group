import { useCallback } from "react";
import NewsItemContainer from "./news-item-container";
import PropTypes from "prop-types";
import styles from "./articles.module.css";

const Articles = ({ className = "" }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <section className={[styles.articles, className].join(" ")}>
      <div className={styles.articc}>
        <div className={styles.articleRow}>
          <NewsItemContainer
            newsItemWrapper="/frame-163@2x.png"
            theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
            aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="unset"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-15@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="unset"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-2@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="unset"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-91@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="unset"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
        </div>
        <div className={styles.articleRow1}>
          <NewsItemContainer
            newsItemWrapper="/frame-16-11@2x.png"
            theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
            aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-1@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <div className={styles.frameParent} onClick={onFrameContainerClick}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-16-9@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent}>
              <b className={styles.energyTechnologyPerspectives}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShowsTheGlobalParent}>
                <div className={styles.theAnalysisShows}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min}>Posted 25 min ago</div>
              </div>
            </div>
          </div>
          <NewsItemContainer
            newsItemWrapper="/frame-16-13@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16@2x.png"
            theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
            aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-4@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-8@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
          <NewsItemContainer
            newsItemWrapper="/frame-16-12@2x.png"
            theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
            aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
            propHeight="27.5rem"
            propFlex="unset"
            propAlignSelf="unset"
            propWidth="17.438rem"
            onNewsItemWrapperClick={onFrameContainerClick}
          />
        </div>
      </div>
    </section>
  );
};

Articles.propTypes = {
  className: PropTypes.string,
};

export default Articles;
