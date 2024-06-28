import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent = ({
  className = "",
  spacerTwo,
  propFlex,
  propHeight,
  onInsightContainerClick,
}) => {
  const frameDiv5Style = useMemo(() => {
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
      className={[styles.spacerTwoParent, className].join(" ")}
      onClick={onInsightContainerClick}
      style={frameDiv5Style}
    >
      <img className={styles.spacerTwoIcon} alt="" src={spacerTwo} />
      <div className={styles.insightContentTwo}>
        <b className={styles.energyTechnologyPerspectives}>
          Energy Technology Perspectives 2023
        </b>
        <div className={styles.theAnalysisShows}>
          The analysis shows the global market for key mass-manufactured clean
          energy technologies will be
        </div>
        <div className={styles.insightFooterRightTwo}>
          <div className={styles.insightCategoryImageTwo} />
          <div className={styles.financePostedContainer}>
            <b>Finance</b>
            <span className={styles.posted25Min}> - Posted 25 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  spacerTwo: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,

  /** Action props */
  onInsightContainerClick: PropTypes.func,
};

export default FrameComponent;
