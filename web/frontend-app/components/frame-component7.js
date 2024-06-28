import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component7.module.css";

const FrameComponent = ({
  className = "",
  thirdNewsItemImage,
  finance,
  propFlex,
  propHeight,
  onNewsItemDetailsClick,
}) => {
  const frameDiv8Style = useMemo(() => {
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
      className={[styles.thirdNewsItemImageParent, className].join(" ")}
      onClick={onNewsItemDetailsClick}
      style={frameDiv8Style}
    >
      <img
        className={styles.thirdNewsItemImage}
        alt=""
        src={thirdNewsItemImage}
      />
      <div className={styles.energyTechnologyPerspectivesParent}>
        <b className={styles.energyTechnologyPerspectives}>
          Energy Technology Perspectives 2023
        </b>
        <div className={styles.theAnalysisShows}>
          The analysis shows the global market for key mass-manufactured clean
          energy technologies will be
        </div>
        <div className={styles.thirdNewsItemFooter}>
          <div className={styles.thirdNewsItemTypeIcon} />
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
  thirdNewsItemImage: PropTypes.string,
  finance: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onNewsItemDetailsClick: PropTypes.func,
};

export default FrameComponent;
