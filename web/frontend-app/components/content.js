import PropTypes from "prop-types";
import styles from "./content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.financeWrapper}>
        <h1 className={styles.finance}>Finance</h1>
      </div>
      <div className={styles.strengthPlaceholderParent}>
        <img
          className={styles.strengthPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-973@2x.png"
        />
        <div className={styles.highlights}>
          <div className={styles.strengthItem}>
            <b className={styles.strength}>Strength</b>
            <div className={styles.luxembourgStandsProudlyContainer}>
              <p className={styles.luxembourgStandsProudly}>
                Luxembourg stands proudly as one of the world's foremost
                financial centers, renowned for its unwavering commitment to
                strong regulation and fiscal stability. At the heart of this
                financial prowess lies a highly diversified international
                financial ecosystem, reflecting the nation's strategic approach
                to cultivating a resilient and adaptable financial sector.
              </p>
              <p className={styles.contributingToThis}>
                Contributing to this success is Luxembourg's asset of a
                multilingual workforce, providing a dynamic and globally
                oriented pool of talent.
              </p>
              <p className={styles.theseFactorsCollectively}>
                These factors collectively position Luxembourg as a hub of
                financial excellence, attracting businesses and investors
                seeking stability, regulatory soundness, and a thriving
                international financial environment.
              </p>
            </div>
          </div>
          <div className={styles.challengeItem}>
            <b className={styles.challenges}>Challenges :</b>
            <div className={styles.despiteItsStanding}>
              Despite its standing as a global financial powerhouse, Luxembourg
              faces several financial challenges that demand strategic
              attention. The persistent tax haven stereotype poses a hurdle,
              requiring proactive efforts to reshape perceptions and reinforce
              the nation's commitment to responsible financial practices.
              Additionally, the alarming rates of internet fraud present a
              pressing concern, necessitating enhanced cybersecurity measures to
              safeguard financial transactions and protect both businesses and
              individuals. Furthermore, the ongoing digital revolution
              introduces complexities that demand adaptation, as Luxembourg
              navigates the evolving landscape of fintech and digital finance.
              Addressing these challenges head-on is imperative for sustaining
              the nation's financial reputation and resilience in an
              ever-changing global economic environment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
