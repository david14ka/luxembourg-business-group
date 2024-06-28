import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "", frame16, propFlex, propHeight }) => {
  const frameDiv4Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      onClick={onFrameContainerClick}
      style={frameDiv4Style}
    >
      <img className={styles.frameChild} alt="" src={frame16} />
      <div className={styles.energyTechnologyPerspectivesParent}>
        <b className={styles.energyTechnologyPerspectives}>
          Energy Technology Perspectives 2023
        </b>
        <div className={styles.theAnalysisShows}>
          The analysis shows the global market for key mass-manufactured clean
          energy technologies will be
        </div>
        <div className={styles.newsActionsCopy}>
          <div className={styles.newsActionIconsCopy} />
          <div className={styles.financePostedContainer}>
            <b>Finance</b>
            <span className={styles.posted25Min}> - Posted 25 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  frame16: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default FrameComponent5;
