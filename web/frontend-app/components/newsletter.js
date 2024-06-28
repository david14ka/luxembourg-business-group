import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./newsletter.module.css";

const Newsletter = ({
  className = "",
  newsletterAlignSelf,
  newsletterPadding,
  newsletterWidth,
}) => {
  const newsletterStyle = useMemo(() => {
    return {
      alignSelf: newsletterAlignSelf,
      padding: newsletterPadding,
      width: newsletterWidth,
    };
  }, [newsletterAlignSelf, newsletterPadding, newsletterWidth]);

  return (
    <section
      className={[styles.newsletter, className].join(" ")}
      style={newsletterStyle}
    >
      <div className={styles.subscribe}>
        <h1 className={styles.stayInformedStayContainer}>
          <span>{`Stay Informed, Stay Connected: `}</span>
          <span className={styles.getTheLatest}>Get the Latest News</span>
          <span> Delivered to Your Inbox!</span>
        </h1>
        <div className={styles.newsletterInput}>
          <div className={styles.inputFields}>
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
          </div>
          <div className={styles.inputFields1}>
            <b className={styles.subscribe1}>Subscribe</b>
          </div>
        </div>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,

  /** Style props */
  newsletterAlignSelf: PropTypes.any,
  newsletterPadding: PropTypes.any,
  newsletterWidth: PropTypes.any,
};

export default Newsletter;
