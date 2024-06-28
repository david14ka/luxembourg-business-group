import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./news2.module.css";

const News2 = ({
  className = "",
  iCT,
  propBackgroundImage,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMinWidth1,
}) => {
  const news1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propBackgroundImage, propAlignSelf, propFlex, propMinWidth]);

  const iCTStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const router = useRouter();

  const onNews1ContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.news1, className].join(" ")}
      onClick={onNews1ContainerClick}
      style={news1Style}
    >
      <div className={styles.news1Inner}>
        <div className={styles.interviewsContentParent}>
          <div className={styles.interviewsContent} />
          <div className={styles.ictWrapper}>
            <b className={styles.ict} style={iCTStyle}>
              {iCT}
            </b>
          </div>
        </div>
      </div>
      <h2 className={styles.theSubstantialRole}>
        The Substantial Role of JP Morgan in Luxembourg's Financial Landscape
      </h2>
      <div className={styles.thMarch2024Wrapper}>
        <div className={styles.thMarch2024}>4th March, 2024</div>
      </div>
    </div>
  );
};

News2.propTypes = {
  className: PropTypes.string,
  iCT: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default News2;
