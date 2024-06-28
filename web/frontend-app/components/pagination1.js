import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./pagination1.module.css";

const Pagination = ({ className = "", propPadding }) => {
  const paginationStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.pagination, className].join(" ")}
      style={paginationStyle}
    >
      <div className={styles.pageNavigation}>
        <div className={styles.pageIndicatorParent}>
          <div className={styles.pageIndicator} />
          <img className={styles.forwardIcon} alt="" src="/forward@2x.png" />
        </div>
        <div className={styles.pageNumber}>
          <div className={styles.placeholder}>
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

Pagination.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Pagination;
