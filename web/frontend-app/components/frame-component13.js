import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./frame-component13.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent} onClick={onFrameContainerClick}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-16@2x.png"
        />
        <div className={styles.theIeaHighlightedAlmostTwoParent}>
          <b className={styles.theIeaHighlighted}>
            The IEA highlighted almost two years ago that ...
          </b>
          <div className={styles.aNewGlobalEnergyEconomyWaParent}>
            <div className={styles.aNewGlobal}>
              a new global energy economy was emerging rapidly. Today, it has
              become a central pillar of
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.financePostedContainer}>
                <b>Finance</b>
                <span className={styles.posted25Min}> - Posted 25 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
