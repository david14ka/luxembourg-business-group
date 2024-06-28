import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./rcnews.module.css";

const Rcnews = ({
  className = "",
  relatedArticleImagePlaceh,
  jPMorgansPresenceInLuxemb,
  thFebruary2024,
  propPadding,
  propMinWidth,
}) => {
  const rcnews3Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const thFebruary2024Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const onRcnews3ContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div
      className={[styles.rcnews3, className].join(" ")}
      onClick={onRcnews3ContainerClick}
      style={rcnews3Style}
    >
      <img
        className={styles.relatedArticleImagePlacehol}
        loading="lazy"
        alt=""
        src={relatedArticleImagePlaceh}
      />
      <div className={styles.relatedArticleContent}>
        <b className={styles.jpMorgansPresence}>{jPMorgansPresenceInLuxemb}</b>
        <div className={styles.relatedArticleDateContainer}>
          <div className={styles.thFebruary2024} style={thFebruary2024Style}>
            {thFebruary2024}
          </div>
        </div>
      </div>
    </div>
  );
};

Rcnews.propTypes = {
  className: PropTypes.string,
  relatedArticleImagePlaceh: PropTypes.string,
  jPMorgansPresenceInLuxemb: PropTypes.string,
  thFebruary2024: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Rcnews;
