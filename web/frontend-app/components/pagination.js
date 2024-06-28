import PropTypes from "prop-types";
import styles from "./pagination.module.css";

const Pagination = ({ className = "" }) => {
  return (
    <section className={[styles.pagination, className].join(" ")}>
      <div className={styles.paginationControls}>
        <div className={styles.pageButtons}>
          <div className={styles.previousButton}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.forwardIcon}
                alt=""
                src="/forward@2x.png"
              />
            </div>
            <div className={styles.nextButton}>
              <div className={styles.placeholder}>
                <b>1</b>
                <span className={styles.span}> 2 3 4 5 6 ... 98</span>
              </div>
            </div>
            <img
              className={styles.previousButtonChild}
              alt=""
              src="/group-28@2x.png"
            />
          </div>
        </div>
        <div className={styles.newsletter}>
          <h1 className={styles.stayInformedStayContainer}>
            <span>{`Stay Informed, Stay Connected: `}</span>
            <span className={styles.getTheLatest}>Get the Latest News</span>
            <span> Delivered to Your Inbox!</span>
          </h1>
          <div className={styles.emailForm}>
            <div className={styles.formFields}>
              <div className={styles.enterYourEmail}>
                Enter your email address
              </div>
            </div>
            <div className={styles.formFields1}>
              <b className={styles.subscribe}>Subscribe</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
