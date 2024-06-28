import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./footer11.module.css";

const Footer1 = ({
  className = "",
  termsOfUse,
  propPadding,
  techDarajaShallNotBeLiablGap,
  propPadding1,
}) => {
  const footerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const footerContentStyle = useMemo(() => {
    return {
      gap: techDarajaShallNotBeLiablGap,
    };
  }, [techDarajaShallNotBeLiablGap]);

  const frameDiv10Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={[styles.footer, className].join(" ")} style={footerStyle}>
      <div className={styles.footerContent} style={footerContentStyle}>
        <div className={styles.termsOfUseWrapper} style={frameDiv10Style}>
          <h1 className={styles.termsOfUse}>{termsOfUse}</h1>
        </div>
        <h3 className={styles.useOfWebsiteContainer}>
          <p className={styles.useOfWebsite}>
            <b className={styles.useOfWebsite1}>1. Use of Website</b>
          </p>
          <p className={styles.youMustBeAtLeast18Years}>
            <span className={styles.youMustBe}>
              1.1. You must be at least 18 years old to use the Website. By
              using the Website and agreeing to these Terms, you represent and
              warrant that you are at least 18 years old.
            </span>
          </p>
          <p className={styles.youMayNotUseTheWebsiteFo}>
            <span className={styles.youMayNot}>
              1.2. You may not use the Website for any unlawful purpose or in
              violation of these Terms.
            </span>
          </p>
          <p className={styles.youAreResponsibleForMainta}>
            <span className={styles.youAreResponsible}>
              1.3. You are responsible for maintaining the confidentiality of
              your account and password and for restricting access to your
              computer. You agree to accept responsibility for all activities
              that occur under your account or password.
            </span>
          </p>
          <p className={styles.blankLine}>
            <span className={styles.blankLine1}>&nbsp;</span>
          </p>
          <p className={styles.intellectualProperty}>
            <b className={styles.intellectualProperty1}>
              2. Intellectual Property
            </b>
          </p>
          <p className={styles.theWebsiteAndItsOriginalC}>
            <span className={styles.theWebsiteAnd}>
              2.1. The Website and its original content, features, and
              functionality are owned by TechDaraja and are protected by
              international copyright, trademark, patent, trade secret, and
              other intellectual property or proprietary rights laws.
            </span>
          </p>
          <p className={styles.youMayNotModifyReproduce}>
            <span className={styles.youMayNot1}>
              2.2. You may not modify, reproduce, distribute, create derivative
              works of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on the Website, except as
              necessary to access and use the Website.
            </span>
          </p>
          <p className={styles.blankLine2}>
            <span className={styles.blankLine3}>&nbsp;</span>
          </p>
          <p className={styles.limitationOfLiability}>
            <b className={styles.limitationOfLiability1}>
              3. Limitation of Liability
            </b>
          </p>
          <p className={styles.techdarajaShallNotBeLiable}>
            <span className={styles.techdarajaShallNot}>
              3.1. TechDaraja shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses,
              resulting from your access to or use of or inability to access or
              use the Website.
            </span>
          </p>
          <p className={styles.blankLine4}>
            <span className={styles.blankLine5}>&nbsp;</span>
          </p>
          <p className={styles.indemnification}>
            <b className={styles.indemnification1}>4. Indemnification</b>
          </p>
          <p className={styles.youAgreeToDefendIndemnify}>
            <span className={styles.youAgreeTo}>
              4.1. You agree to defend, indemnify, and hold harmless TechDaraja
              and its affiliates, licensors, and service providers, and its and
              their respective officers, directors, employees, contractors,
              agents, licensors, suppliers, successors, and assigns from and
              against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys’
              fees) arising out of or relating to your violation of these Terms
              or your use of the Website.
            </span>
          </p>
          <p className={styles.blankLine6}>
            <span className={styles.blankLine7}>&nbsp;</span>
          </p>
          <p className={styles.governingLaw}>
            <b className={styles.governingLaw1}>5. Governing Law</b>
          </p>
          <p className={styles.theseTermsShallBeGoverned}>
            <span className={styles.theseTermsShall}>
              5.1. These Terms shall be governed by and construed in accordance
              with the laws of [Your Jurisdiction], without regard to its
              conflict of law principles.
            </span>
          </p>
          <p className={styles.blankLine8}>
            <span className={styles.blankLine9}>&nbsp;</span>
          </p>
          <p className={styles.changesToTerms}>
            <b className={styles.changesToTerms1}>6. Changes to Terms</b>
          </p>
          <p className={styles.techdarajaReservesTheRight}>
            <span className={styles.techdarajaReservesThe}>
              6.1. TechDaraja reserves the right, at its sole discretion, to
              modify or replace these Terms at any time. If a revision is
              material, TechDaraja will provide at least 30 days’ notice prior
              to any new terms taking effect. What constitutes a material change
              will be determined at TechDaraja’s sole discretion.
            </span>
          </p>
          <p className={styles.blankLine10}>
            <span className={styles.blankLine11}>&nbsp;</span>
          </p>
          <p className={styles.contactUs}>
            <b className={styles.contactUs1}>7. Contact Us</b>
          </p>
          <p className={styles.ifYouHaveAnyQuestionsAbou}>
            <span>
              7.1. If you have any questions about these Terms, please contact
              us at 
            </span>
            <a
              className={styles.infotechdarajacom}
              href="mailto:info@techdaraja.com"
              target="_blank"
            >
              <span>
                <span className={styles.infotechdarajacom1}>
                  info@techdaraja.com.
                </span>
              </span>
            </a>
          </p>
        </h3>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
  termsOfUse: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  techDarajaShallNotBeLiablGap: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Footer1;
