import { useCallback } from "react";
import CardContent from "./card-content";
import PropTypes from "prop-types";
import styles from "./article-preview.module.css";

const ArticlePreview = ({ className = "" }) => {
  const onCardContentContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <section className={[styles.articlePreview, className].join(" ")}>
      <div className={styles.articc}>
        <div className={styles.articleCard}>
          <div
            className={styles.cardContent}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardPlaceholderIcon}
              loading="lazy"
              alt=""
              src="/frame-164@2x.png"
            />
            <div className={styles.theIeaHighlightedAlmostTwoParent}>
              <b className={styles.theIeaHighlighted}>
                The IEA highlighted almost two years ago that ...
              </b>
              <div className={styles.aNewGlobal}>
                a new global energy economy was emerging rapidly. Today, it has
                become a central pillar of
              </div>
              <div className={styles.posted25Min}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent1}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild}
              alt=""
              src="/frame-16-16@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent}>
              <b className={styles.energyTechnologyPerspectives}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min1}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent2}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentItem}
              alt=""
              src="/frame-16-21@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesGroup}>
              <b className={styles.energyTechnologyPerspectives1}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows1}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min2}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent3}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentInner}
              alt=""
              src="/frame-16-91@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesContainer}>
              <b className={styles.energyTechnologyPerspectives2}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows2}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min3}>Posted 25 min ago</div>
            </div>
          </div>
        </div>
        <div className={styles.articleCard1}>
          <div
            className={styles.cardContent4}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardPlaceholderIcon1}
              alt=""
              src="/frame-16-11@2x.png"
            />
            <div className={styles.theIeaHighlightedAlmostTwoGroup}>
              <b className={styles.theIeaHighlighted1}>
                The IEA highlighted almost two years ago that ...
              </b>
              <div className={styles.aNewGlobal1}>
                a new global energy economy was emerging rapidly. Today, it has
                become a central pillar of
              </div>
              <div className={styles.posted25Min4}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent5}
            onClick={onCardContentContainerClick}
          >
            <img className={styles.frameIcon} alt="" src="/frame-16-1@2x.png" />
            <div className={styles.frameDiv}>
              <b className={styles.energyTechnologyPerspectives3}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows3}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min5}>Posted 25 min ago</div>
            </div>
          </div>
          <CardContent
            onCardContentContainerClick={onCardContentContainerClick}
          />
          <div
            className={styles.cardContent6}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild1}
              alt=""
              src="/frame-16-13@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent1}>
              <b className={styles.energyTechnologyPerspectives4}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows4}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min6}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent7}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild2}
              alt=""
              src="/frame-16@2x.png"
            />
            <div className={styles.theIeaHighlightedAlmostTwoContainer}>
              <b className={styles.theIeaHighlighted2}>
                The IEA highlighted almost two years ago that ...
              </b>
              <div className={styles.aNewGlobal2}>
                a new global energy economy was emerging rapidly. Today, it has
                become a central pillar of
              </div>
              <div className={styles.posted25Min7}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent8}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild3}
              alt=""
              src="/frame-16-4@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent2}>
              <b className={styles.energyTechnologyPerspectives5}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows5}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min8}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent9}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild4}
              alt=""
              src="/frame-16-8@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent3}>
              <b className={styles.energyTechnologyPerspectives6}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows6}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min9}>Posted 25 min ago</div>
            </div>
          </div>
          <div
            className={styles.cardContent10}
            onClick={onCardContentContainerClick}
          >
            <img
              className={styles.cardContentChild5}
              alt=""
              src="/frame-16-12@2x.png"
            />
            <div className={styles.energyTechnologyPerspectivesParent4}>
              <b className={styles.energyTechnologyPerspectives7}>
                Energy Technology Perspectives 2023
              </b>
              <div className={styles.theAnalysisShows7}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min10}>Posted 25 min ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ArticlePreview.propTypes = {
  className: PropTypes.string,
};

export default ArticlePreview;
