import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./news1.module.css";

const News1 = ({
  className = "",
  finance,
  propBackgroundImage,
  propMinWidth,
}) => {
  const news3Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const financeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const router = useRouter();

  const onNews3ContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.news3, className].join(" ")}
      onClick={onNews3ContainerClick}
      style={news3Style}
    >
      <div className={styles.rDTitleParent}>
        <div className={styles.rDTitle} />
        <div className={styles.financeWrapper}>
          <b className={styles.finance} style={financeStyle}>
            {finance}
          </b>
        </div>
      </div>
      <b className={styles.theArtStudioContainer}>
        <p className={styles.theArtStudio}>The art studio Gallery</p>
        <p className={styles.livingHope}>living hope</p>
      </b>
      <div className={styles.thMarch2024}>6th March, 2024</div>
    </div>
  );
};

News1.propTypes = {
  className: PropTypes.string,
  finance: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default News1;
