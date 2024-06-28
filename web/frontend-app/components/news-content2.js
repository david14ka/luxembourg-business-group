import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./news-content2.module.css";

const NewsContent = ({
  className = "",
  newsImage,
  propHeight,
  propFlex,
  onNewsContentContainerClick,
}) => {
  const newsContentStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const onNewsContentContainerClick1 = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div
      className={[styles.newsContent, className].join(" ")}
      onClick={onNewsContentContainerClick}
      style={newsContentStyle}
    >
      <img
        className={styles.newsImageIcon}
        loading="lazy"
        alt=""
        src={newsImage}
      />
      <div className={styles.newsDetails}>
        <b className={styles.theIeaHighlighted}>
          The IEA highlighted almost two years ago that ...
        </b>
        <div className={styles.newsDescriptions}>
          <div className={styles.aNewGlobal}>
            a new global energy economy was emerging rapidly. Today, it has
            become a central pillar of
          </div>
          <div className={styles.newsFooter}>
            <div className={styles.newsLink} />
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

NewsContent.propTypes = {
  className: PropTypes.string,
  newsImage: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,

  /** Action props */
  onNewsContentContainerClick: PropTypes.func,
};

export default NewsContent;
