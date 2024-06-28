import { useCallback } from "react";
import { useRouter } from "next/router";
import CardContent from "./card-content";
import PropTypes from "prop-types";
import styles from "./articles1.module.css";

const Articles = ({ className = "" }) => {
  const router = useRouter();

  const onPerspectiveItemContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <section className={[styles.articles, className].join(" ")}>
      <div className={styles.articc}>
        <div className={styles.articleRow}>
          <div className={styles.articlePair}>
            <div
              className={styles.articleItem}
              onClick={onPerspectiveItemContainerClick}
            >
              <img
                className={styles.emptyArticleIcon}
                loading="lazy"
                alt=""
                src="/frame-165@2x.png"
              />
              <div className={styles.articleContent}>
                <b className={styles.theIeaHighlighted}>
                  The IEA highlighted almost two years ago that ...
                </b>
                <div className={styles.aNewGlobal}>
                  a new global energy economy was emerging rapidly. Today, it
                  has become a central pillar of
                </div>
                <div className={styles.posted25Min}>Posted 25 min ago</div>
              </div>
            </div>
          </div>
          <div
            className={styles.articlePair1}
            onClick={onPerspectiveItemContainerClick}
          >
            <img
              className={styles.articleItemIcon}
              alt=""
              src="/frame-16-11@2x.png"
            />
            <div className={styles.articleItem1}>
              <b className={styles.theIeaHighlighted1}>
                The IEA highlighted almost two years ago that ...
              </b>
              <div className={styles.aNewGlobal1}>
                a new global energy economy was emerging rapidly. Today, it has
                become a central pillar of
              </div>
              <div className={styles.posted25Min1}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.articleRow1}
            onClick={onPerspectiveItemContainerClick}
          >
            <img
              className={styles.emptyArticleIcon1}
              alt=""
              src="/frame-16@2x.png"
            />
            <div className={styles.articleContent1}>
              <b className={styles.theIeaHighlighted2}>
                The IEA highlighted almost two years ago that ...
              </b>
              <div className={styles.aNewGlobal2}>
                a new global energy economy was emerging rapidly. Today, it has
                become a central pillar of
              </div>
              <div className={styles.posted25Min2}>Posted 25 min ago</div>
            </div>
          </div>
        </div>
        <div className={styles.articleRow2}>
          <div
            className={styles.frameParent}
            onClick={onPerspectiveItemContainerClick}
          >
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-16-32@2x.png"
            />
            <div className={styles.articleItem2}>
              <b className={styles.energyTechnologyPerspectives}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min3}>Posted 25 min ago</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div
              className={styles.emptyArticleParent}
              onClick={onPerspectiveItemContainerClick}
            >
              <img
                className={styles.emptyArticleIcon2}
                alt=""
                src="/frame-16-1@2x.png"
              />
              <div className={styles.articleContent2}>
                <b className={styles.energyTechnologyPerspectives1}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows1}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min4}>Posted 25 min ago</div>
              </div>
            </div>
            <div
              className={styles.frameContainer}
              onClick={onPerspectiveItemContainerClick}
            >
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-16-4@2x.png"
              />
              <div className={styles.energyTechnologyPerspectivesParent}>
                <b className={styles.energyTechnologyPerspectives2}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows2}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min5}>Posted 25 min ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articleGrid}>
          <div className={styles.articleGridRow}>
            <div
              className={styles.articleGridItem}
              onClick={onPerspectiveItemContainerClick}
            >
              <img
                className={styles.emptyArticleGrid}
                alt=""
                src="/frame-16-62@2x.png"
              />
              <div className={styles.articleGridContent}>
                <b className={styles.energyTechnologyPerspectives3}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows3}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min6}>Posted 25 min ago</div>
              </div>
            </div>
            <div
              className={styles.articleGridItem1}
              onClick={onPerspectiveItemContainerClick}
            >
              <img
                className={styles.articleGridItemChild}
                alt=""
                src="/frame-16-7@2x.png"
              />
              <div className={styles.energyTechnologyPerspectivesGroup}>
                <b className={styles.energyTechnologyPerspectives4}>
                  Energy Technology Perspectives 2023
                </b>
                <div className={styles.theAnalysisShows4}>
                  The analysis shows the global market for key mass-manufactured
                  clean energy technologies will be
                </div>
                <div className={styles.posted25Min7}>Posted 25 min ago</div>
              </div>
            </div>
          </div>
          <div className={styles.perspectives}>
            <div className={styles.perspectiveList}>
              <CardContent
                propWidth="unset"
                propFlex="1"
                propMinWidth="11.313rem"
                onCardContentContainerClick={onPerspectiveItemContainerClick}
              />
              <div
                className={styles.articleList}
                onClick={onPerspectiveItemContainerClick}
              >
                <img
                  className={styles.articleItemIcon1}
                  alt=""
                  src="/frame-16-13@2x.png"
                />
                <div className={styles.articleEntry}>
                  <b className={styles.energyTechnologyPerspectives5}>
                    Energy Technology Perspectives 2023
                  </b>
                  <div className={styles.theAnalysisShows5}>
                    The analysis shows the global market for key
                    mass-manufactured clean energy technologies will be
                  </div>
                  <div className={styles.posted25Min8}>Posted 25 min ago</div>
                </div>
              </div>
            </div>
            <div className={styles.perspectiveList1}>
              <div
                className={styles.frameDiv}
                onClick={onPerspectiveItemContainerClick}
              >
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/frame-16-8@2x.png"
                />
                <div className={styles.energyTechnologyPerspectivesContainer}>
                  <b className={styles.energyTechnologyPerspectives6}>
                    Energy Technology Perspectives 2023
                  </b>
                  <div className={styles.theAnalysisShows6}>
                    The analysis shows the global market for key
                    mass-manufactured clean energy technologies will be
                  </div>
                  <div className={styles.posted25Min9}>Posted 25 min ago</div>
                </div>
              </div>
              <div
                className={styles.frameParent1}
                onClick={onPerspectiveItemContainerClick}
              >
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="/frame-16-12@2x.png"
                />
                <div className={styles.energyTechnologyPerspectivesParent1}>
                  <b className={styles.energyTechnologyPerspectives7}>
                    Energy Technology Perspectives 2023
                  </b>
                  <div className={styles.theAnalysisShows7}>
                    The analysis shows the global market for key
                    mass-manufactured clean energy technologies will be
                  </div>
                  <div className={styles.posted25Min10}>Posted 25 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Articles.propTypes = {
  className: PropTypes.string,
};

export default Articles;
