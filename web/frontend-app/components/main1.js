import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./main1.module.css";

const Main1 = ({ className = "" }) => {
  const router = useRouter();

  const onHeaderLeftImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    router.push("/contact");
  }, [router]);

  const onSearchIconClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <header className={styles.header}>
          <img
            className={styles.headerLeftIcon}
            loading="lazy"
            alt=""
            src="/frame-1@2x.png"
            onClick={onHeaderLeftImageClick}
          />
          <div className={styles.headerChild} />
          <div className={styles.headerItem} />
          <div className={styles.headerRight}>
            <div className={styles.brand}>
              <div className={styles.brandLinks}>
                <a className={styles.home} onClick={onHeaderLeftImageClick}>
                  Home
                </a>
              </div>
              <div className={styles.brandLinks1}>
                <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                  About us
                </a>
              </div>
              <div className={styles.navLinks}>
                <div className={styles.sectorsTriggerParent}>
                  <div className={styles.sectorsTrigger}>
                    <a className={styles.sectors}>Sectors</a>
                  </div>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.expandArrowIcon}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.countriesDropdown}>
                <div className={styles.countriesTrigger}>
                  <div className={styles.frameParent}>
                    <div className={styles.countriesWrapper}>
                      <a className={styles.countries}>Countries</a>
                    </div>
                    <div className={styles.frameItem} />
                    <img
                      className={styles.expandArrowIcon1}
                      alt=""
                      src="/expand-arrow@2x.png"
                    />
                  </div>
                  <div className={styles.emptyDropdown}>
                    <img
                      className={styles.emptyDropdownChild}
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className={styles.contactDropdown}>
                    <div
                      className={styles.contactLabelParent}
                      onClick={onGroupContainerClick}
                    >
                      <div className={styles.contactLabel}>
                        <a className={styles.contactUs}>Contact us</a>
                      </div>
                      <div className={styles.contactDivider} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.userActions}>
                <div className={styles.searchWrapper}>
                  <img
                    className={styles.searchIcon}
                    loading="lazy"
                    alt=""
                    src="/search@2x.png"
                    onClick={onSearchIconClick}
                  />
                </div>
                <div className={styles.subscribeWrapper}>
                  <a className={styles.subscribe}>Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.contactBanner}>
          <h1 className={styles.contactUs1}>Contact us</h1>
        </div>
      </div>
    </section>
  );
};

Main1.propTypes = {
  className: PropTypes.string,
};

export default Main1;
