import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./news-item-content.module.css";

const NewsItemContent = ({ className = "", onNewsItemDetailsClick }) => {
  const onNewsItemDetailsClick1 = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div className={[styles.newsItemContent, className].join(" ")}>
      <div className={styles.newsItemDetails} onClick={onNewsItemDetailsClick}>
        <img
          className={styles.newsItemImage}
          loading="lazy"
          alt=""
          src="/frame-16@2x.png"
        />
        <div className={styles.theIeaHighlightedAlmostTwoParent}>
          <b className={styles.theIeaHighlighted}>
            The IEA highlighted almost two years ago that ...
          </b>
          <div className={styles.aNewGlobalEnergyEconomyWaParent}>
            <div className={styles.aNewGlobal}>
              a new global energy economy was emerging rapidly. Today, it has
              become a central pillar of
            </div>
            <div className={styles.newsItemFooter}>
              <div className={styles.newsItemTypeIcon} />
              <div className={styles.financePostedContainer}>
                <b>Finance</b>
                <span className={styles.posted25Min}> - Posted 25 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsItemContent.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onNewsItemDetailsClick: PropTypes.func,
};

export default NewsItemContent;
