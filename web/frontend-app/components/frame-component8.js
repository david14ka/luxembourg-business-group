import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component8.module.css";

const FrameComponent = ({
  className = "",
  frame16,
  finance,
  propFlex,
  propHeight,
  onNewsContentContainerClick,
}) => {
  const frameDiv9Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      onClick={onNewsContentContainerClick}
      style={frameDiv9Style}
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
        <div className={styles.newsItemIcons}>
          <div className={styles.newsItemIconsChild} />
          <div className={styles.financePostedContainer}>
            <b>{finance}</b>
            <span className={styles.posted25Min}> - Posted 25 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame16: PropTypes.string,
  finance: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onNewsContentContainerClick: PropTypes.func,
};

export default FrameComponent;
