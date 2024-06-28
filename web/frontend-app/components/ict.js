import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./ict.module.css";

const Ict = ({
  className = "",
  uSALocationItems,
  uSA,
  luxembourgStandsAsAGlobal,
  propHeight,
  propWidth,
  propFlex,
  propMinWidth,
  propFlex1,
  propMaxHeight,
  propHeight1,
  propWidth1,
  onUSAButtonClick,
}) => {
  const ictStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propHeight, propWidth, propFlex, propMinWidth]);

  const uSALocationItemsStyle = useMemo(() => {
    return {
      flex: propFlex1,
      maxHeight: propMaxHeight,
      height: propHeight1,
    };
  }, [propFlex1, propMaxHeight, propHeight1]);

  const uSAStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const router = useRouter();

  const onUSAButtonClick1 = useCallback(() => {
    router.push("/u-s-a");
  }, [router]);

  return (
    <div className={[styles.ict, className].join(" ")} style={ictStyle}>
      <img
        className={styles.uSALocationItems}
        alt=""
        src={uSALocationItems}
        style={uSALocationItemsStyle}
      />
      <div className={styles.countryData}>
        <div className={styles.countryInformation}>
          <b className={styles.usa} style={uSAStyle}>
            {uSA}
          </b>
          <div className={styles.descriptionContainer}>
            <div className={styles.luxembourgStandsAs}>
              {luxembourgStandsAsAGlobal}
            </div>
            <div className={styles.uSAButton} onClick={onUSAButtonClick}>
              <img
                className={styles.advanceIcon}
                alt=""
                src="/advance@2x.png"
              />
              <div className={styles.moreDetails}>
                <b className={styles.view}>View</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ict.propTypes = {
  className: PropTypes.string,
  uSALocationItems: PropTypes.string,
  uSA: PropTypes.string,
  luxembourgStandsAsAGlobal: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex1: PropTypes.any,
  propMaxHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth1: PropTypes.any,

  /** Action props */
  onUSAButtonClick: PropTypes.func,
};

export default Ict;
