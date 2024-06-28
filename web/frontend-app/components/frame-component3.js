import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({
  className = "",
  uSA,
  frame97,
  whyUSA,
  globalEconomicGiantMaking,
  strategicPartnerForManyCo,
  keyDriverOfTheDigitalTran,
  essentialContributorToAdd,
  housingCrisisWithRisingPr,
  declineOfPrivacyWithIncre,
  regulatoryBurdenThatHampe,
  challengeOfClimateChange,
  propPadding,
  propPadding1,
  propWidth,
  propAlignSelf,
  propPadding2,
  propDisplay,
  propMinWidth,
  propMinHeight,
  propDisplay1,
  propMinWidth1,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding2,
    };
  }, [propWidth, propAlignSelf, propPadding2]);

  const uSA1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const frameIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const whyUSAStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <section
      className={[styles.aboutInner, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.frameParent} style={frameDiv1Style}>
        <div className={styles.usaWrapper} style={frameDiv2Style}>
          <h2 className={styles.usa} style={uSA1Style}>
            {uSA}
          </h2>
        </div>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={frame97}
            style={frameIconStyle}
          />
          <div className={styles.whyUsaParent}>
            <b className={styles.whyUsa} style={whyUSAStyle}>
              {whyUSA}
            </b>
            <div className={styles.globalEconomicGiantContainer}>
              <ul className={styles.globalEconomicGiantMaking}>
                <li className={styles.globalEconomicGiant}>
                  {globalEconomicGiantMaking}
                </li>
                <li className={styles.strategicPartnerFor}>
                  {strategicPartnerForManyCo}
                </li>
                <li className={styles.keyDriverOf}>
                  {keyDriverOfTheDigitalTran}
                </li>
                <li>{essentialContributorToAdd}</li>
              </ul>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.challengesWrapper}>
              <b className={styles.challenges}>Challenges :</b>
            </div>
            <div className={styles.housingCrisisWithContainer}>
              <ul className={styles.housingCrisisWithRisingPr}>
                <li className={styles.housingCrisisWith}>
                  {housingCrisisWithRisingPr}
                </li>
                <li className={styles.declineOfPrivacy}>
                  {declineOfPrivacyWithIncre}
                </li>
                <li className={styles.regulatoryBurdenThat}>
                  {regulatoryBurdenThatHampe}
                </li>
                <li>{challengeOfClimateChange}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  uSA: PropTypes.string,
  frame97: PropTypes.string,
  whyUSA: PropTypes.string,
  globalEconomicGiantMaking: PropTypes.string,
  strategicPartnerForManyCo: PropTypes.string,
  keyDriverOfTheDigitalTran: PropTypes.string,
  essentialContributorToAdd: PropTypes.string,
  housingCrisisWithRisingPr: PropTypes.string,
  declineOfPrivacyWithIncre: PropTypes.string,
  regulatoryBurdenThatHampe: PropTypes.string,
  challengeOfClimateChange: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding2: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinHeight: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FrameComponent3;
