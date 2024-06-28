import { useCallback } from "react";
import { useRouter } from "next/router";
import News2 from "./news2";
import News1 from "./news1";
import News from "./news";
import Ict1 from "./ict1";
import Finance from "./finance";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  const router = useRouter();

  const onCategoryActionsContainerClick = useCallback(() => {
    router.push("/i-c-t");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  const onFinanceActionsContainerClick = useCallback(() => {
    router.push("/steel");
  }, [router]);

  const onFrameContainerClick1 = useCallback(() => {
    router.push("/construction");
  }, [router]);

  const onFinanceSeeAllButtonClick = useCallback(() => {
    router.push("/research");
  }, [router]);

  const onSeeAllContainerClick = useCallback(() => {
    router.push("/articles");
  }, [router]);

  const onSeeAllTextClick = useCallback(() => {
    router.push("/interviews");
  }, [router]);

  const onSeeAllContainerClick1 = useCallback(() => {
    // Please sync "featured Sectors" to the project
  }, []);

  return (
    <div className={[styles.newsTitleParent, className].join(" ")}>
      <div className={styles.newsTitle}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.news1Parent}>
                <News2 iCT="ICT" />
                <div className={styles.latestInterviewsParent}>
                  <h2 className={styles.latestInterviews}>Latest interviews</h2>
                  <News2
                    iCT="Finance"
                    propBackgroundImage="url('/news11@3x.png')"
                    propAlignSelf="stretch"
                    propFlex="unset"
                    propMinWidth="unset"
                    propMinWidth1="3.188rem"
                  />
                </div>
              </div>
              <div className={styles.steelSeeAllContainer}>
                <div className={styles.news3Parent}>
                  <News1 finance="Finance" />
                  <News1
                    finance="Construction"
                    propBackgroundImage="url('/news3@3x.png')"
                    propMinWidth="4.063rem"
                  />
                </div>
                <div className={styles.news3Group}>
                  <News1
                    finance="Construction"
                    propBackgroundImage="url('/news31@3x.png')"
                    propMinWidth="4.063rem"
                  />
                  <News1
                    finance="Construction"
                    propBackgroundImage="url('/news32@3x.png')"
                    propMinWidth="4.063rem"
                  />
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.news4Parent}>
                  <News rDAndInnovation={`R&D and Innovation`} />
                  <div className={styles.worldStoriesParent}>
                    <div className={styles.worldStories}>
                      <News
                        rDAndInnovation={`R&D and Innovation`}
                        propWidth="unset"
                        propBackgroundImage="url('/news4@3x.png')"
                        propFlex="1"
                        propAlignSelf="unset"
                        propMinWidth="6rem"
                      />
                    </div>
                    <div
                      className={styles.seeAll}
                      onClick={onSeeAllContainerClick}
                    >
                      <div className={styles.seeAllLink}>
                        <b className={styles.seeAll1}>{`see all `}</b>
                      </div>
                      <img
                        className={styles.rightArrowIcon}
                        loading="lazy"
                        alt=""
                        src="/right-arrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.steelNews}>
                  <News
                    rDAndInnovation={`Steel & Industrial`}
                    propWidth="unset"
                    propBackgroundImage="url('/news41@3x.png')"
                    propFlex="unset"
                    propAlignSelf="stretch"
                    propMinWidth="5.188rem"
                  />
                  <News
                    rDAndInnovation={`Steel & Industrial`}
                    propWidth="unset"
                    propBackgroundImage="url('/news42@3x.png')"
                    propFlex="unset"
                    propAlignSelf="stretch"
                    propMinWidth="5.188rem"
                  />
                </div>
                <div className={styles.seeAllSteel}>
                  <div className={styles.seeAllContainer}>
                    <div className={styles.seeAllWrapper}>
                      <a
                        className={styles.seeAll2}
                        onClick={onSeeAllTextClick}
                      >{`see all `}</a>
                    </div>
                    <img
                      className={styles.rightArrowIcon1}
                      alt=""
                      src="/right-arrow@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className={styles.featuredSectors}>Featured sectors</h2>
        </div>
        <div className={styles.sectorHighlights}>
          <Ict1
            categoryContainers="/frame-57@2x.png"
            iCT="ICT"
            luxembourgStandsAsAGlobal="Luxembourg stands as a global hub for Information and Communication Technology"
            onCategoryActionsContainerClick={onCategoryActionsContainerClick}
          />
          <Ict1
            categoryContainers="/frame-57-1@2x.png"
            iCT="Finance"
            luxembourgStandsAsAGlobal="Luxembourg stands proudly as one of the world's foremost financial centers"
            propWidth="6.063rem"
            onCategoryActionsContainerClick={onFrameContainerClick}
          />
          <Finance
            frame57="/frame-57-2@2x.png"
            steelIndustrial={`Steel & Industrial`}
            luxembourgsSteelAndIndust="Luxembourg's steel and industrial sector stands as a formidable force on the global stage"
            onFinanceActionsContainerClick={onFinanceActionsContainerClick}
          />
          <Ict1
            categoryContainers="/frame-57-3@2x.png"
            iCT="Construction"
            luxembourgStandsAsAGlobal="The construction sector in Luxembourg is experiencing robust growth fueled by a strong demand"
            propWidth="10.625rem"
            onCategoryActionsContainerClick={onFrameContainerClick1}
          />
          <Finance
            frame57="/frame-57-4@2x.png"
            steelIndustrial={`R&D and Innovation`}
            luxembourgsSteelAndIndust="Luxembourg proudly stands as an Innovation Leader, solidifying its position as a beacon"
            frameDivPadding="0rem var(--padding-base) 0rem var(--padding-8xl)"
            propAlignSelf1="stretch"
            propAlignSelf2="unset"
            propWidth1="12.5rem"
            propDisplay="inline-block"
            onFinanceActionsContainerClick={onFinanceSeeAllButtonClick}
          />
        </div>
      </div>
      <div className={styles.viewAllSectors}>
        <div className={styles.seeAll3} onClick={onSeeAllContainerClick1}>
          <div className={styles.allSectors}>
            <b className={styles.seeAll4}>{`see all `}</b>
          </div>
          <img
            className={styles.rightArrowIcon2}
            alt=""
            src="/right-arrow@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
