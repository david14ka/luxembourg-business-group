import PropTypes from "prop-types";
import styles from "./footer-navigation.module.css";

const FooterNavigation = ({ className = "" }) => {
  return (
    <div className={[styles.footerNavigation, className].join(" ")}>
      <div className={styles.pageNavigation}>
        <div className={styles.previousButtonParent}>
          <div className={styles.previousButton} />
          <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
        </div>
        <div className={styles.pageNumber}>
          <div className={styles.pageIndicator}>
            <b>1</b>
            <span className={styles.span}> 2 3 4 5 6 ... 98</span>
          </div>
        </div>
        <img
          className={styles.pageNavigationChild}
          alt=""
          src="/group-28@2x.png"
        />
      </div>
    </div>
  );
};

FooterNavigation.propTypes = {
  className: PropTypes.string,
};

export default FooterNavigation;
