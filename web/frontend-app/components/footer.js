import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({
  className = "",
  privacyPolicyTextDecoration,
  onHomeContentImageClick,
}) => {
  const privacyPolicyStyle = useMemo(() => {
    return {
      textDecoration: privacyPolicyTextDecoration,
    };
  }, [privacyPolicyTextDecoration]);

  const router = useRouter();

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
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.frameParent}>
            <div className={styles.countriesTitleWrapper}>
              <img
                className={styles.countriesTitleIcon}
                loading="lazy"
                alt=""
                src="/frame-36@2x.png"
                onClick={onHomeContentImageClick}
              />
            </div>
            <b className={styles.countries}>Countries</b>
            <div className={styles.countriesList}>
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
        <div className={styles.searchSocial}>
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <div className={styles.searchInput}>
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
          <div className={styles.footerLinks}>
            <div className={styles.footerTitles}>
              <b className={styles.sectors}>Sectors</b>
              <b className={styles.stayUpTo}>Stay up to date</b>
            </div>
            <div className={styles.linksSocial}>
              <div className={styles.sectorLinks}>
                <div className={styles.sectorsList}>
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
              <div className={styles.socialLinks}>
                <div className={styles.socialIcons}>
                  <div className={styles.socialPlatforms}>
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
                  <div className={styles.socialPlatforms1}>
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
      <div className={styles.socialMedia}>
        <div className={styles.socialMediaChild} />
        <div className={styles.copyrightInfoWrapper}>
          <div className={styles.copyrightInfo}>
            <div className={styles.luxembourgBusinessGroup}>
              © 2024 Luxembourg Business Group. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.termsOfUse} onClick={onTermsOfUseClick}>
                Terms of use
              </div>
              <a
                className={styles.privacyPolicy}
                onClick={onPrivacyPolicyTextClick}
                style={privacyPolicyStyle}
              >
                Privacy policy
              </a>
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
  privacyPolicyTextDecoration: PropTypes.any,

  /** Action props */
  onHomeContentImageClick: PropTypes.func,
};

export default Footer;
