import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./insight.module.css";

const Insight = ({
  className = "",
  spacer,
  propFlex,
  propHeight,
  onInsightContainerClick,
}) => {
  const insightStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const router = useRouter();

  const onInsightContainerClick1 = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.insight, className].join(" ")}
      onClick={onInsightContainerClick}
      style={insightStyle}
    >
      <img className={styles.spacerIcon} loading="lazy" alt="" src={spacer} />
      <div className={styles.insightContent}>
        <b className={styles.theIeaHighlighted}>
          The IEA highlighted almost two years ago that ...
        </b>
        <div className={styles.insightDescription}>
          <div className={styles.aNewGlobal}>
            a new global energy economy was emerging rapidly. Today, it has
            become a central pillar of
          </div>
          <div className={styles.insightFooter}>
            <div className={styles.insightImage} />
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

Insight.propTypes = {
  className: PropTypes.string,
  spacer: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onInsightContainerClick: PropTypes.func,
};

export default Insight;
