import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./news-items.module.css";

const NewsItems = ({
  className = "",
  newsItemPlaceholder,
  propHeight,
  propFlex,
}) => {
  const newsItemsStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  const router = useRouter();

  const onNewsItemsContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.newsItems, className].join(" ")}
      onClick={onNewsItemsContainerClick}
      style={newsItemsStyle}
    >
      <img
        className={styles.newsItemPlaceholder}
        loading="lazy"
        alt=""
        src={newsItemPlaceholder}
      />
      <div className={styles.newsItem}>
        <b className={styles.theIeaHighlighted}>
          The IEA highlighted almost two years ago that ...
        </b>
        <div className={styles.newsDescription}>
          <div className={styles.aNewGlobal}>
            a new global energy economy was emerging rapidly. Today, it has
            become a central pillar of
          </div>
          <div className={styles.newsFooter}>
            <div className={styles.newsImage} />
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

NewsItems.propTypes = {
  className: PropTypes.string,
  newsItemPlaceholder: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
};

export default NewsItems;
