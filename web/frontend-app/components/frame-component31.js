import { useCallback } from "react";
import Header1 from "./header11";
import PropTypes from "prop-types";
import styles from "./frame-component31.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <section className={[styles.headerParent, className].join(" ")}>
      <Header1 group4="pending_1087:1713" />
      <div className={styles.slider3}>
        <div className={styles.slide}>
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
          <div className={styles.readMore} onClick={onReadMoreContainerClick}>
            <b className={styles.readMore1}>{`Read more >`}</b>
          </div>
        </div>
        <div className={styles.imagePlaceholder}>
          <img
            className={styles.imagePlaceholderChild}
            loading="lazy"
            alt=""
            src="/group-29.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
