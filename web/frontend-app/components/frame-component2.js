import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({
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
  propPadding1,
}) => {
  const frameSection1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <section
      className={[styles.aboutInner, className].join(" ")}
      style={frameSection1Style}
    >
      <div className={styles.frameParent}>
        <div className={styles.germanyWrapper} style={frameDiv3Style}>
          <h2 className={styles.germany}>{germany}</h2>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src={frame97} />
          <div className={styles.whyGermanyParent}>
            <b className={styles.whyGermany}>{whyGermany}</b>
            <div className={styles.secondInTheContainer}>
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
          <div className={styles.frameContainer}>
            <div className={styles.challengesWrapper}>
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
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
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
  propPadding1: PropTypes.any,
};

export default FrameComponent2;
