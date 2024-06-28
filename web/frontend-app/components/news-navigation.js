import PropTypes from "prop-types";
import styles from "./news-navigation.module.css";

const NewsNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.newsNavigation, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.previousParent}>
          <div className={styles.previous} />
          <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
        </div>
        <div className={styles.placeholderWrapper}>
          <div className={styles.placeholder}>
            <b>1</b>
            <span className={styles.span}> 2 3 4 5 6 ... 98</span>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/group-28@2x.png" />
      </div>
    </div>
  );
};

NewsNavigation.propTypes = {
  className: PropTypes.string,
};

export default NewsNavigation;
