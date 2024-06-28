import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component12.module.css";

const FrameComponent1 = ({
  className = "",
  germany,
  frame97,
  whyGermany,
  secondInTheWorldInThe2022,
  globalLeaderInInnovationA,
  strongExportOrientedEcono,
  highExportQuotaWhichRefle,
  digitalizationAndAutomati,
  demographicChangeCouldRed,
  globalizationAndExpositio,
  phaseOutCoalIncreaseItsRe,
  propPadding,
  propDisplay,
  propMinWidth,
  propPadding1,
  propDisplay1,
  propMinWidth1,
  propWidth,
  propDisplay2,
  propAlignSelf,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const germanyStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const whyGermanyStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const secondInTheContainerStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay2,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propDisplay2, propAlignSelf]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.germanyWrapper} style={frameDiv6Style}>
        <h1 className={styles.germany} style={germanyStyle}>
          {germany}
        </h1>
      </div>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame97}
        />
        <div className={styles.whyGermanyParent} style={frameDiv7Style}>
          <b className={styles.whyGermany} style={whyGermanyStyle}>
            {whyGermany}
          </b>
          <div
            className={styles.secondInTheContainer}
            style={secondInTheContainerStyle}
          >
            <ul className={styles.secondInTheWorldInThe202}>
              <li className={styles.secondInThe}>
                {secondInTheWorldInThe2022}
              </li>
              <li className={styles.globalLeaderIn}>
                {globalLeaderInInnovationA}
              </li>
              <li className={styles.strongExportOrientedEconomy}>
                {strongExportOrientedEcono}
              </li>
              <li>{highExportQuotaWhichRefle}</li>
            </ul>
          </div>
        </div>
        <div className={styles.germanyChallengesContentParent}>
          <div className={styles.germanyChallengesContent}>
            <b className={styles.challenges}>Challenges :</b>
          </div>
          <div className={styles.digitalizationAndAutomationContainer}>
            <ul className={styles.digitalizationAndAutomation}>
              <li className={styles.digitalizationAndAutomation1}>
                {digitalizationAndAutomati}
              </li>
              <li className={styles.demographicChangeCould}>
                {demographicChangeCouldRed}
              </li>
              <li className={styles.globalizationAndExposition}>
                {globalizationAndExpositio}
              </li>
              <li>{phaseOutCoalIncreaseItsRe}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  germany: PropTypes.string,
  frame97: PropTypes.string,
  whyGermany: PropTypes.string,
  secondInTheWorldInThe2022: PropTypes.string,
  globalLeaderInInnovationA: PropTypes.string,
  strongExportOrientedEcono: PropTypes.string,
  highExportQuotaWhichRefle: PropTypes.string,
  digitalizationAndAutomati: PropTypes.string,
  demographicChangeCouldRed: PropTypes.string,
  globalizationAndExpositio: PropTypes.string,
  phaseOutCoalIncreaseItsRe: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay2: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
