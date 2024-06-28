import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./finance.module.css";

const Finance = ({
  className = "",
  frame57,
  steelIndustrial,
  luxembourgsSteelAndIndust,
  frameDivPadding,
  propAlignSelf1,
  propAlignSelf2,
  propWidth1,
  propDisplay,
  onFinanceActionsContainerClick,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const steelIndustrialStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const luxembourgsSteelAndStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth1,
      display: propDisplay,
    };
  }, [propAlignSelf2, propWidth1, propDisplay]);

  const router = useRouter();

  const onFinanceActionsContainerClick1 = useCallback(() => {
    router.push("/steel");
  }, [router]);

  return (
    <div className={[styles.finance, className].join(" ")}>
      <img className={styles.financeChild} alt="" src={frame57} />
      <div className={styles.financeInner} style={frameDivStyle}>
        <div className={styles.steelIndustrialParent}>
          <b className={styles.steelIndustrial} style={steelIndustrialStyle}>
            {steelIndustrial}
          </b>
          <div
            className={styles.luxembourgsSteelAnd}
            style={luxembourgsSteelAndStyle}
          >
            {luxembourgsSteelAndIndust}
          </div>
        </div>
      </div>
      <div className={styles.viewAllButton}>
        <div
          className={styles.financeActions}
          onClick={onFinanceActionsContainerClick}
        >
          <img className={styles.advanceIcon} alt="" src="/advance@2x.png" />
          <div className={styles.viewAllLink}>
            <b className={styles.view}>View</b>
          </div>
        </div>
      </div>
    </div>
  );
};

Finance.propTypes = {
  className: PropTypes.string,
  frame57: PropTypes.string,
  steelIndustrial: PropTypes.string,
  luxembourgsSteelAndIndust: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propAlignSelf2: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,

  /** Action props */
  onFinanceActionsContainerClick: PropTypes.func,
};

export default Finance;
