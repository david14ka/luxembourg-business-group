import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component22.module.css";

const FrameComponent2 = ({
  className = "",
  propBackgroundImage,
  onFrameContainerClick,
}) => {
  const slideContentStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <section className={[styles.sliderWrapper, className].join(" ")}>
      <div className={styles.slider}>
        <div className={styles.slideContent} style={slideContentStyle}>
          <div className={styles.theForgeOfProsperityLuxemWrapper}>
            <h1 className={styles.theForgeOf}>
              The Forge of Prosperity: Luxembourg's Steel Industry and Its
              Economic Impact
            </h1>
          </div>
          <div className={styles.luxembourgsSteelIndustryHaWrapper}>
            <div className={styles.luxembourgsSteelIndustry}>
              Luxembourg's steel industry has played a pivotal role in shaping
              the country's economic landscape. 
            </div>
          </div>
          <div
            className={styles.readMoreWrapper}
            onClick={onFrameContainerClick}
          >
            <b className={styles.readMore}>{`Read more >`}</b>
          </div>
        </div>
        <div className={styles.sliderNavigation}>
          <img
            className={styles.sliderNavigationChild}
            loading="lazy"
            alt=""
            src="/group-29.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default FrameComponent2;
