import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./subscription.module.css";

const Subscription = ({
  className = "",
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const subscriptionStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <section
      className={[styles.subscription, className].join(" ")}
      style={subscriptionStyle}
    >
      <div className={styles.subscribe}>
        <h1 className={styles.stayInformedStayContainer}>
          <span>{`Stay Informed, Stay Connected: `}</span>
          <span className={styles.getTheLatest}>Get the Latest News</span>
          <span> Delivered to Your Inbox!</span>
        </h1>
        <div className={styles.subscriptionFields}>
          <div className={styles.subscriptionInput}>
            <div className={styles.enterYourEmail}>
              Enter your email address
            </div>
          </div>
          <div className={styles.subscriptionInput1}>
            <b className={styles.subscribe1}>Subscribe</b>
          </div>
        </div>
      </div>
    </section>
  );
};

Subscription.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Subscription;
