import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./news.module.css";

const News = ({
  className = "",
  rDAndInnovation,
  propWidth,
  propBackgroundImage,
  propFlex,
  propAlignSelf,
  propMinWidth,
}) => {
  const news4Style = useMemo(() => {
    return {
      width: propWidth,
      backgroundImage: propBackgroundImage,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propBackgroundImage, propFlex, propAlignSelf]);

  const rDAndInnovationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const router = useRouter();

  const onNews4ContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div
      className={[styles.news4, className].join(" ")}
      onClick={onNews4ContainerClick}
      style={news4Style}
    >
      <div className={styles.featuredParent}>
        <div className={styles.featured} />
        <div className={styles.rdAndInnovationWrapper}>
          <b className={styles.rdAndInnovation} style={rDAndInnovationStyle}>
            {rDAndInnovation}
          </b>
        </div>
      </div>
      <b className={styles.getTheBest}>
        Get the best out of the solution and ...
      </b>
      <div className={styles.thMarch2024}>6th March, 2024</div>
    </div>
  );
};

News.propTypes = {
  className: PropTypes.string,
  rDAndInnovation: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default News;
