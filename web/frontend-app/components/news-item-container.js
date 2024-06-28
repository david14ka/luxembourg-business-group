import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./news-item-container.module.css";

const NewsItemContainer = ({
  className = "",
  newsItemWrapper,
  theIEAHighlightedAlmostTw,
  aNewGlobalEnergyEconomyWa,
  propHeight,
  propFlex,
  propAlignSelf,
  propWidth,
  onNewsItemWrapperClick,
}) => {
  const newsItemContainerStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propHeight, propFlex, propAlignSelf, propWidth]);

  const onNewsItemContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div
      className={[styles.newsItemContainer, className].join(" ")}
      onClick={onNewsItemWrapperClick}
      style={newsItemContainerStyle}
    >
      <img className={styles.newsItemWrapper} alt="" src={newsItemWrapper} />
      <div className={styles.newsItemContainer1}>
        <b className={styles.theIeaHighlighted}>{theIEAHighlightedAlmostTw}</b>
        <div className={styles.aNewGlobal}>{aNewGlobalEnergyEconomyWa}</div>
        <div className={styles.posted25Min}>Posted 25 min ago</div>
      </div>
    </div>
  );
};

NewsItemContainer.propTypes = {
  className: PropTypes.string,
  newsItemWrapper: PropTypes.string,
  theIEAHighlightedAlmostTw: PropTypes.string,
  aNewGlobalEnergyEconomyWa: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,

  /** Action props */
  onNewsItemWrapperClick: PropTypes.func,
};

export default NewsItemContainer;
