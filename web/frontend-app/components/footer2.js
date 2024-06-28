import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./footer2.module.css";

const Footer = ({ className = "", propTextDecoration }) => {
  const privacyPolicy2Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const router = useRouter();

  const onCountriesTitleImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onUSATextClick = useCallback(() => {
    router.push("/u-s-a");
  }, [router]);

  const onGermanyTextClick = useCallback(() => {
    router.push("/germany");
  }, [router]);

  const onBelgiumTextClick = useCallback(() => {
    router.push("/belgium");
  }, [router]);

  const onNetherlandsTextClick = useCallback(() => {
    router.push("/netherlands");
  }, [router]);

  const onFranceTextClick = useCallback(() => {
    router.push("/france");
  }, [router]);

  const onSwitzerlandTextClick = useCallback(() => {
    router.push("/swit");
  }, [router]);

  const onUnitedArabEmirateClick = useCallback(() => {
    // Please sync "uae" to the project
  }, []);

  const onSearchMoreIconClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onICTTextClick = useCallback(() => {
    router.push("/i-c-t");
  }, [router]);

  const onFinanceTextClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  const onSteelIndustrialClick = useCallback(() => {
    router.push("/steel");
  }, [router]);

  const onConstructionTextClick = useCallback(() => {
    router.push("/construction");
  }, [router]);

  const onRDAndInnovationClick = useCallback(() => {
    router.push("/research");
  }, [router]);

  const onTermsOfUseClick = useCallback(() => {
    router.push("/terms");
  }, [router]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    router.push("/policy");
  }, [router]);

  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopInner}>
          <div className={styles.countriesHeaderParent}>
            <div className={styles.countriesHeader}>
              <img
                className={styles.countriesTitleIcon}
                loading="lazy"
                alt=""
                src="/frame-36@2x.png"
                onClick={onCountriesTitleImageClick}
              />
            </div>
            <b className={styles.countries}>Countries</b>
            <div className={styles.countryList}>
              <div className={styles.usa} onClick={onUSATextClick}>
                USA
              </div>
              <div className={styles.germany} onClick={onGermanyTextClick}>
                Germany
              </div>
              <div className={styles.belgium} onClick={onBelgiumTextClick}>
                Belgium
              </div>
              <div
                className={styles.netherlands}
                onClick={onNetherlandsTextClick}
              >
                Netherlands
              </div>
              <div className={styles.france} onClick={onFranceTextClick}>
                France
              </div>
              <div
                className={styles.switzerland}
                onClick={onSwitzerlandTextClick}
              >
                Switzerland
              </div>
              <div
                className={styles.unitedArabEmirate}
                onClick={onUnitedArabEmirateClick}
              >
                United Arab Emirate
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerSearch}>
          <div className={styles.searchInput}>
            <div className={styles.searchBar}>
              <div className={styles.searchField}>
                <b className={styles.search}>Search</b>
              </div>
              <img
                className={styles.searchMoreIcon}
                alt=""
                src="/search-more@2x.png"
                onClick={onSearchMoreIconClick}
              />
            </div>
          </div>
          <div className={styles.sectorsSubscribe}>
            <div className={styles.sectorsTitle}>
              <b className={styles.sectors}>Sectors</b>
              <b className={styles.stayUpTo}>Stay up to date</b>
            </div>
            <div className={styles.sectorsList}>
              <div className={styles.sectorsContainer}>
                <div className={styles.sectors1}>
                  <div className={styles.ict} onClick={onICTTextClick}>
                    ICT
                  </div>
                  <div className={styles.finance} onClick={onFinanceTextClick}>
                    Finance
                  </div>
                  <div
                    className={styles.steelIndustrial}
                    onClick={onSteelIndustrialClick}
                  >{`Steel & Industrial`}</div>
                  <div
                    className={styles.construction}
                    onClick={onConstructionTextClick}
                  >
                    Construction
                  </div>
                  <div
                    className={styles.rdAndInnovation}
                    onClick={onRDAndInnovationClick}
                  >{`R&D and Innovation`}</div>
                </div>
              </div>
              <div className={styles.socialMedia}>
                <div className={styles.socialIcons}>
                  <div className={styles.socialLinks}>
                    <img
                      className={styles.facebookIcon}
                      loading="lazy"
                      alt=""
                      src="/facebook@2x.png"
                    />
                    <img
                      className={styles.youtubeLogoIcon}
                      loading="lazy"
                      alt=""
                      src="/youtube-logo@2x.png"
                    />
                  </div>
                  <div className={styles.socialLinks1}>
                    <img
                      className={styles.linkedinIcon}
                      loading="lazy"
                      alt=""
                      src="/linkedin@2x.png"
                    />
                    <img
                      className={styles.twitterxIcon}
                      loading="lazy"
                      alt=""
                      src="/twitterx@2x.png"
                    />
                  </div>
                </div>
                <img
                  className={styles.instagramIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerSeparator} />
        <div className={styles.copyright}>
          <div className={styles.copyrightInfo}>
            <div className={styles.luxembourgBusinessGroup}>
              © 2024 Luxembourg Business Group. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.termsOfUse} onClick={onTermsOfUseClick}>
                Terms of use
              </div>
              <div
                className={styles.privacyPolicy}
                onClick={onPrivacyPolicyTextClick}
                style={privacyPolicy2Style}
              >
                Privacy policy
              </div>
              <div className={styles.cookiesPolicy}>Cookies policy</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default Footer;
