import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./third-news-item.module.css";

const ThirdNewsItem = ({
  className = "",
  thirdNewsItemContent,
  onNewsItemDetailsClick,
}) => {
  const onThirdNewsItemClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div
      className={[styles.thirdNewsItem, className].join(" ")}
      onClick={onNewsItemDetailsClick}
    >
      <img
        className={styles.thirdNewsItemContent}
        alt=""
        src={thirdNewsItemContent}
      />
      <div className={styles.fourthNewsItem}>
        <b className={styles.theIeaHighlighted}>
          The IEA highlighted almost two years ago that ...
        </b>
        <div className={styles.fourthNewsItemContent}>
          <div className={styles.aNewGlobal}>
            a new global energy economy was emerging rapidly. Today, it has
            become a central pillar of
          </div>
          <div className={styles.fourthNewsItemFooterConten}>
            <div className={styles.fourthNewsItemTypeIcon} />
            <div className={styles.financePostedContainer}>
              <b>Finance</b>
              <span className={styles.posted25Min}> - Posted 25 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ThirdNewsItem.propTypes = {
  className: PropTypes.string,
  thirdNewsItemContent: PropTypes.string,

  /** Action props */
  onNewsItemDetailsClick: PropTypes.func,
};

export default ThirdNewsItem;
