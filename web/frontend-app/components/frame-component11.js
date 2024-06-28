import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component11.module.css";

const FrameComponent1 = ({
  className = "",
  propPadding,
  propGap,
  propWidth,
  propPadding1,
  propAlignSelf,
  propPadding2,
}) => {
  const frameSection2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const subscriptionContainerStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const subscriptionContentStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding1, propAlignSelf]);

  const subscribeStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <section
      className={[styles.subscriptionContainerWrapper, className].join(" ")}
      style={frameSection2Style}
    >
      <div
        className={styles.subscriptionContainer}
        style={subscriptionContainerStyle}
      >
        <div
          className={styles.subscriptionContent}
          style={subscriptionContentStyle}
        >
          <div className={styles.sliderControls}>
            <div className={styles.previousButtonParent}>
              <div className={styles.previousButton} />
              <img
                className={styles.forwardIcon}
                alt=""
                src="/forward@2x.png"
              />
            </div>
            <div className={styles.slideCounter}>
              <div className={styles.placeholder}>
                <b>1</b>
                <span className={styles.span}> 2 3 4 5 6 ... 98</span>
              </div>
            </div>
            <img
              className={styles.sliderControlsChild}
              alt=""
              src="/group-28@2x.png"
            />
          </div>
        </div>
        <div className={styles.subscribe} style={subscribeStyle}>
          <h1 className={styles.stayInformedStayContainer}>
            <span>{`Stay Informed, Stay Connected: `}</span>
            <span className={styles.getTheLatest}>Get the Latest News</span>
            <span> Delivered to Your Inbox!</span>
          </h1>
          <div className={styles.emailInput}>
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
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding2: PropTypes.any,
};

export default FrameComponent1;
