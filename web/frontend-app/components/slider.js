import { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.css";

const Slider = ({ className = "", propBackgroundImage }) => {
  const sliderContentStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <section className={[styles.slider, className].join(" ")}>
      <div className={styles.slider1}>
        <div className={styles.sliderContent} style={sliderContentStyle}>
          <div className={styles.slide}>
            <h1 className={styles.theForgeOf}>
              The Forge of Prosperity: Luxembourg's Steel Industry and Its
              Economic Impact
            </h1>
          </div>
          <div className={styles.slideDescription}>
            <div className={styles.luxembourgsSteelIndustry}>
              Luxembourg's steel industry has played a pivotal role in shaping
              the country's economic landscape. 
            </div>
          </div>
          <div className={styles.readMore} onClick={onReadMoreContainerClick}>
            <b className={styles.readMore1}>{`Read more >`}</b>
          </div>
        </div>
        <div className={styles.sliderNav}>
          <img
            className={styles.sliderNavChild}
            loading="lazy"
            alt=""
            src="/group-29.svg"
          />
        </div>
      </div>
    </section>
  );
};

Slider.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Slider;
