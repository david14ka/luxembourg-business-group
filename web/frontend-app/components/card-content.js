import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./card-content.module.css";

const CardContent = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  onCardContentContainerClick,
}) => {
  const cardContentStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const onCardContentContainerClick1 = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div
      className={[styles.cardContent, className].join(" ")}
      onClick={onCardContentContainerClick}
      style={cardContentStyle}
    >
      <img
        className={styles.cardContentChild}
        alt=""
        src="/frame-16-9@2x.png"
      />
      <div className={styles.energyTechnologyPerspectivesParent}>
        <b className={styles.energyTechnologyPerspectives}>
          Energy Technology Perspectives 2023
        </b>
        <div className={styles.theAnalysisShowsTheGlobalParent}>
          <div className={styles.theAnalysisShows}>
            The analysis shows the global market for key mass-manufactured clean
            energy technologies will be
          </div>
          <div className={styles.posted25Min}>Posted 25 min ago</div>
        </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onCardContentContainerClick: PropTypes.func,
};

export default CardContent;
