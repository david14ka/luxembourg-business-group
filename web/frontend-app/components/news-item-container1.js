import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./news-item-container1.module.css";

const NewsItemContainer1 = ({
  className = "",
  newsItemImage,
  onNewsItemWrapperClick,
}) => {
  const onNewsItemWrapperClick1 = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={[styles.newsItemContainer, className].join(" ")}>
      <div className={styles.newsItemWrapper} onClick={onNewsItemWrapperClick}>
        <img
          className={styles.newsItemImage}
          loading="lazy"
          alt=""
          src={newsItemImage}
        />
        <div className={styles.newsItemInfo}>
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
    </div>
  );
};

NewsItemContainer1.propTypes = {
  className: PropTypes.string,
  newsItemImage: PropTypes.string,

  /** Action props */
  onNewsItemWrapperClick: PropTypes.func,
};

export default NewsItemContainer1;
