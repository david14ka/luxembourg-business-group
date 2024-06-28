import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./ict1.module.css";

const Ict1 = ({
  className = "",
  categoryContainers,
  iCT,
  luxembourgStandsAsAGlobal,
  propWidth,
  onCategoryActionsContainerClick,
}) => {
  const iCT1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const router = useRouter();

  const onCategoryActionsContainerClick1 = useCallback(() => {
    router.push("/i-c-t");
  }, [router]);

  return (
    <div className={[styles.ict, className].join(" ")}>
      <img
        className={styles.categoryContainersIcon}
        loading="lazy"
        alt=""
        src={categoryContainers}
      />
      <div className={styles.categoryContent}>
        <div className={styles.categoryDetails}>
          <b className={styles.ict1} style={iCT1Style}>
            {iCT}
          </b>
          <div className={styles.categoryDetails1}>
            <div className={styles.luxembourgStandsAs}>
              {luxembourgStandsAsAGlobal}
            </div>
            <div
              className={styles.categoryActions}
              onClick={onCategoryActionsContainerClick}
            >
              <img
                className={styles.advanceIcon}
                alt=""
                src="/advance@2x.png"
              />
              <div className={styles.viewMore}>
                <b className={styles.view}>View</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ict1.propTypes = {
  className: PropTypes.string,
  categoryContainers: PropTypes.string,
  iCT: PropTypes.string,
  luxembourgStandsAsAGlobal: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,

  /** Action props */
  onCategoryActionsContainerClick: PropTypes.func,
};

export default Ict1;
