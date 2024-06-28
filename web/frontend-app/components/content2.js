import { useCallback } from "react";
import Insight from "./insight";
import FrameComponent from "./frame-component6";
import PropTypes from "prop-types";
import styles from "./content2.module.css";

const Content2 = ({ className = "" }) => {
  const onArticleRowContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.mainContent}>
        <div className={styles.articleList}>
          <Insight
            spacer="/frame-16@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onArticleRowContainerClick}
          />
          <div className={styles.articleRow}>
            <Insight
              spacer="/frame-16-1@2x.png"
              propFlex="unset"
              propHeight="27.5rem"
              onInsightContainerClick={onArticleRowContainerClick}
            />
            <div className={styles.articleRow1}>
              <Insight
                spacer="/frame-16@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
              <Insight
                spacer="/frame-16@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
            </div>
          </div>
        </div>
        <div className={styles.articleList1}>
          <div
            className={styles.frameParent}
            onClick={onArticleRowContainerClick}
          >
            <img
              className={styles.frameChild}
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
              <div className={styles.articleColumn}>
                <div className={styles.articleImage} />
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
            <div
              className={styles.frameContainer}
              onClick={onArticleRowContainerClick}
            >
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-16-5@2x.png"
              />
              <div className={styles.energyTechnologyPerspectivesGroup}>
                <b className={styles.energyTechnologyPerspectives1}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows1}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.articleColumn1}>
                  <div className={styles.articleImage1} />
                  <div className={styles.financePostedContainer}>
                    <b>Finance</b>
                    <span className={styles.posted25Min1}>
                      {" "}
                      - Posted 25 min ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <FrameComponent
                spacerTwo="/frame-16-4@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
              <FrameComponent
                spacerTwo="/frame-16-4@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
            </div>
          </div>
        </div>
        <div className={styles.articleList2}>
          <FrameComponent
            spacerTwo="/frame-16-8@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onArticleRowContainerClick}
          />
          <div className={styles.frameParent1}>
            <FrameComponent
              spacerTwo="/frame-16-9@2x.png"
              propFlex="unset"
              propHeight="27.5rem"
              onInsightContainerClick={onArticleRowContainerClick}
            />
            <div className={styles.frameParent2}>
              <FrameComponent
                spacerTwo="/frame-16-8@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
              <FrameComponent
                spacerTwo="/frame-16-8@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
            </div>
          </div>
        </div>
        <div className={styles.articleList3}>
          <FrameComponent
            spacerTwo="/frame-16-12@2x.png"
            propFlex="unset"
            propHeight="27.5rem"
            onInsightContainerClick={onArticleRowContainerClick}
          />
          <div className={styles.frameParent3}>
            <FrameComponent
              spacerTwo="/frame-16-13@2x.png"
              propFlex="unset"
              propHeight="27.5rem"
              onInsightContainerClick={onArticleRowContainerClick}
            />
            <div className={styles.frameParent4}>
              <FrameComponent
                spacerTwo="/frame-16-12@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
              <FrameComponent
                spacerTwo="/frame-16-12@2x.png"
                propFlex="1"
                propHeight="unset"
                onInsightContainerClick={onArticleRowContainerClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
};

export default Content2;
