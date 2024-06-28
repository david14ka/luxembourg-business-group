import PropTypes from "prop-types";
import styles from "./newsletter1.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <section className={[styles.newsletter, className].join(" ")}>
      <div className={styles.subscribe}>
        <h1 className={styles.stayInformedStayContainer}>
          <span>{`Stay Informed, Stay Connected: `}</span>
          <span className={styles.getTheLatest}>Get the Latest News</span>
          <span> Delivered to Your Inbox!</span>
        </h1>
        <div className={styles.inputFields}>
          <div className={styles.emailInput}>
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
          </div>
          <div className={styles.emailInput1}>
            <b className={styles.subscribe1}>Subscribe</b>
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
