import { useCallback } from "react";
import { useRouter } from "next/router";
import Insight from "./insight";
import FrameComponent from "./frame-component6";
import PropTypes from "prop-types";
import styles from "./insights.module.css";

const Insights = ({ className = "" }) => {
  const router = useRouter();

  const onInsightContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <section className={[styles.insights, className].join(" ")}>
      <div className={styles.insightsContainer}>
        <div className={styles.insightsGrid}>
          <div className={styles.insightRow}>
            <Insight
              spacer="/frame-16@2x.png"
              onInsightContainerClick={onInsightContainerClick}
            />
          </div>
          <Insight
            spacer="/frame-16-1@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onInsightContainerClick}
          />
          <Insight
            spacer="/frame-16@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onInsightContainerClick}
          />
        </div>
        <div className={styles.insightsGrid1}>
          <div className={styles.frameParent} onClick={onInsightContainerClick}>
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-16-4@2x.png"
            />
            <div className={styles.insightCategory}>
              <b className={styles.energyTechnologyPerspectives}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.insightFooterRight}>
                <div className={styles.insightCategoryImage} />
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
          <div className={styles.frameGroup}>
            <FrameComponent
              spacerTwo="/frame-16-5@2x.png"
              onInsightContainerClick={onInsightContainerClick}
            />
            <FrameComponent
              spacerTwo="/frame-16-4@2x.png"
              propFlex="1"
              propHeight="unset"
              onInsightContainerClick={onInsightContainerClick}
            />
          </div>
        </div>
        <div className={styles.insightsGrid2}>
          <FrameComponent
            spacerTwo="/frame-16-8@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onInsightContainerClick}
          />
          <div className={styles.frameContainer}>
            <FrameComponent
              spacerTwo="/frame-16-9@2x.png"
              propFlex="1"
              propHeight="unset"
              onInsightContainerClick={onInsightContainerClick}
            />
            <FrameComponent
              spacerTwo="/frame-16-8@2x.png"
              propFlex="1"
              propHeight="unset"
              onInsightContainerClick={onInsightContainerClick}
            />
          </div>
        </div>
        <div className={styles.insightsGrid3}>
          <FrameComponent
            spacerTwo="/frame-16-12@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onInsightContainerClick}
          />
          <div className={styles.frameDiv}>
            <FrameComponent
              spacerTwo="/frame-16-13@2x.png"
              propFlex="1"
              propHeight="unset"
              onInsightContainerClick={onInsightContainerClick}
            />
            <FrameComponent
              spacerTwo="/frame-16-12@2x.png"
              propFlex="1"
              propHeight="unset"
              onInsightContainerClick={onInsightContainerClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Insights.propTypes = {
  className: PropTypes.string,
};

export default Insights;
