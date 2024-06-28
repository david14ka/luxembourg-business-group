import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./country-highlight.module.css";

const CountryHighlight = ({
  className = "",
  belgium,
  whyBelgium,
  ranked12thInTheWorldInThe,
  strongPublicInvestmentWhi,
  diversifiedAndIndustriali,
  multilingualAndSkilledWor,
  globalCompetitionAndDigit,
  lowWorkforceParticipation,
  unbalancedPublicFinancesP,
  highInflationErodingThePu,
  propPadding,
  propGap,
  propPadding1,
  propDisplay,
  propMinWidth,
  propMinHeight,
  propDisplay1,
  propMinWidth1,
}) => {
  const countryHighlightStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const countryInfoStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const belgiumStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const placeholderIconStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const whyBelgiumStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <section
      className={[styles.countryHighlight, className].join(" ")}
      style={countryHighlightStyle}
    >
      <div className={styles.countryInfo} style={countryInfoStyle}>
        <h1 className={styles.belgium} style={belgiumStyle}>
          {belgium}
        </h1>
      </div>
      <div className={styles.countryDetails}>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/frame-9710@2x.png"
          style={placeholderIconStyle}
        />
        <div className={styles.countrySummary}>
          <b className={styles.whyBelgium} style={whyBelgiumStyle}>
            {whyBelgium}
          </b>
          <div className={styles.ranked12thInContainer}>
            <ul className={styles.ranked12thInTheWorldInTh}>
              <li className={styles.ranked12thIn}>
                {ranked12thInTheWorldInThe}
              </li>
              <li className={styles.strongPublicInvestment}>
                {strongPublicInvestmentWhi}
              </li>
              <li className={styles.diversifiedAndIndustrialized}>
                {diversifiedAndIndustriali}
              </li>
              <li>{multilingualAndSkilledWor}</li>
            </ul>
          </div>
        </div>
        <div className={styles.countryChallenges}>
          <div className={styles.challengesTitle}>
            <b className={styles.challenges}>Challenges :</b>
          </div>
          <div className={styles.globalCompetitionAndContainer}>
            <ul className={styles.globalCompetitionAndDigital}>
              <li className={styles.globalCompetitionAnd}>
                {globalCompetitionAndDigit}
              </li>
              <li className={styles.lowWorkforceParticipation}>
                {lowWorkforceParticipation}
              </li>
              <li className={styles.unbalancedPublicFinances}>
                {unbalancedPublicFinancesP}
              </li>
              <li>{highInflationErodingThePu}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

CountryHighlight.propTypes = {
  className: PropTypes.string,
  belgium: PropTypes.string,
  whyBelgium: PropTypes.string,
  ranked12thInTheWorldInThe: PropTypes.string,
  strongPublicInvestmentWhi: PropTypes.string,
  diversifiedAndIndustriali: PropTypes.string,
  multilingualAndSkilledWor: PropTypes.string,
  globalCompetitionAndDigit: PropTypes.string,
  lowWorkforceParticipation: PropTypes.string,
  unbalancedPublicFinancesP: PropTypes.string,
  highInflationErodingThePu: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propPadding1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinHeight: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default CountryHighlight;
