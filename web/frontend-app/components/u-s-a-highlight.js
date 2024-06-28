import PropTypes from "prop-types";
import styles from "./u-s-a-highlight.module.css";

const USAHighlight = ({ className = "" }) => {
  return (
    <section className={[styles.uSAHighlight, className].join(" ")}>
      <div className={styles.uSABanner}>
        <h1 className={styles.usa}>USA</h1>
      </div>
      <div className={styles.uSADetails}>
        <img
          className={styles.spacerIcon}
          loading="lazy"
          alt=""
          src="/frame-971@2x.png"
        />
        <div className={styles.whyUSA}>
          <b className={styles.whyUsa}>Why USA</b>
          <div className={styles.globalEconomicGiantContainer}>
            <ul className={styles.globalEconomicGiantMaking}>
              <li className={styles.globalEconomicGiant}>
                Global economic giant, making it a crucial player in
                international trade and investment
              </li>
              <li className={styles.strategicPartnerFor}>
                Strategic partner for many countries in various sectors, such as
                trade, investment, security, and diplomacy.
              </li>
              <li className={styles.keyDriverOf}>
                Key driver of the digital transformation, with a leading role in
                developing and deploying new technologies
              </li>
              <li>Essential contributor to addressing global challenges</li>
            </ul>
          </div>
        </div>
        <div className={styles.challenges}>
          <div className={styles.challengesTitle}>
            <b className={styles.challenges1}>Challenges :</b>
          </div>
          <div className={styles.housingCrisisWithContainer}>
            <ul className={styles.housingCrisisWithRisingPr}>
              <li className={styles.housingCrisisWith}>
                Housing crisis, with rising prices, low supply, and high demand
              </li>
              <li className={styles.declineOfPrivacy}>
                Decline of privacy, with increasing surveillance, data breaches,
                and cyberattacks
              </li>
              <li className={styles.regulatoryBurdenThat}>
                Regulatory burden that hamper innovation and competitiveness
              </li>
              <li>Challenge of climate change</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

USAHighlight.propTypes = {
  className: PropTypes.string,
};

export default USAHighlight;
