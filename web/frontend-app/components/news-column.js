import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./news-column.module.css";

const NewsColumn = ({ className = "", frame16, onNewsItemWrapperClick }) => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={[styles.newsColumn, className].join(" ")}>
      <div className={styles.frameParent} onClick={onNewsItemWrapperClick}>
        <img className={styles.frameChild} alt="" src={frame16} />
        <div className={styles.energyTechnologyPerspectivesParent}>
          <b className={styles.energyTechnologyPerspectives}>
            Energy Technology Perspectives 2023
          </b>
          <div className={styles.theAnalysisShows}>
            The analysis shows the global market for key mass-manufactured clean
            energy technologies will be
          </div>
          <div className={styles.posted25Min}>Posted 25 min ago</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer} onClick={onNewsItemWrapperClick}>
          <img className={styles.frameItem} alt="" src="/frame-16-9@2x.png" />
          <div className={styles.energyTechnologyPerspectivesGroup}>
            <b className={styles.energyTechnologyPerspectives1}>
              Energy Technology Perspectives 2023
            </b>
            <div className={styles.theAnalysisShowsTheGlobalParent}>
              <div className={styles.theAnalysisShows1}>
                The analysis shows the global market for key mass-manufactured
                clean energy technologies will be
              </div>
              <div className={styles.posted25Min1}>Posted 25 min ago</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv} onClick={onNewsItemWrapperClick}>
          <img className={styles.frameInner} alt="" src="/frame-16-8@2x.png" />
          <div className={styles.energyTechnologyPerspectivesContainer}>
            <b className={styles.energyTechnologyPerspectives2}>
              Energy Technology Perspectives 2023
            </b>
            <div className={styles.theAnalysisShows2}>
              The analysis shows the global market for key mass-manufactured
              clean energy technologies will be
            </div>
            <div className={styles.posted25Min2}>Posted 25 min ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsColumn.propTypes = {
  className: PropTypes.string,
  frame16: PropTypes.string,

  /** Action props */
  onNewsItemWrapperClick: PropTypes.func,
};

export default NewsColumn;
