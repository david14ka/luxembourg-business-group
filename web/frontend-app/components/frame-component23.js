import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component23.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <section className={[styles.sliderWrapper, className].join(" ")}>
      <div className={styles.slider}>
        <div className={styles.slideContent}>
          <div className={styles.slideTitle}>
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
        <div className={styles.slideNavigation}>
          <img
            className={styles.slideNavigationChild}
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
};

export default FrameComponent2;
