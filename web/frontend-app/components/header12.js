import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header12.module.css";

const Header1 = ({ className = "", group4 }) => {
  const router = useRouter();

  const onNavPlaceholderImageClick = useCallback(() => {
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
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.topNav}>
        <img
          className={styles.navPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onNavPlaceholderImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.navLinks}>
        <div className={styles.homeLink}>
          <div className={styles.home}>
            <a className={styles.home1} onClick={onNavPlaceholderImageClick}>
              Home
            </a>
          </div>
          <div className={styles.aboutLink}>
            <div className={styles.about}>
              <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About us
              </a>
            </div>
            <div className={styles.sectorsExpandParent}>
              <div className={styles.sectorsExpand}>
                <div className={styles.sectorsButton}>
                  <div className={styles.sectorsWrapper}>
                    <a className={styles.sectors}>Sectors</a>
                  </div>
                  <img
                    className={styles.expandArrowIcon}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.navDivider} />
            </div>
            <div className={styles.countriesDropdown}>
              <div className={styles.countriesExpand}>
                <div className={styles.frameParent}>
                  <div className={styles.countriesWrapper}>
                    <a className={styles.countries}>Countries</a>
                  </div>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.expandArrowIcon1}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
                <div className={styles.countriesList}>
                  <img
                    className={styles.countriesListChild}
                    loading="lazy"
                    alt=""
                    src={group4}
                  />
                </div>
              </div>
              <div className={styles.contactLink}>
                <div
                  className={styles.contactUsParent}
                  onClick={onGroupContainerClick}
                >
                  <a className={styles.contactUs}>Contact us</a>
                  <div className={styles.frameItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchSubscribe}>
        <div className={styles.searchInputParent}>
          <div className={styles.searchInput}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search@2x.png"
              onClick={onSearchIconClick}
            />
          </div>
          <div className={styles.subscribeButton}>
            <a className={styles.subscribe}>Subscribe</a>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  group4: PropTypes.string,
};

export default Header1;
