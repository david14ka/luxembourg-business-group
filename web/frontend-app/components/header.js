import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ className = "" }) => {
  const router = useRouter();

  const onMainImageClick = useCallback(() => {
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
      <div className={styles.mainWrapper}>
        <img
          className={styles.mainIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onMainImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.searchContent}>
        <div className={styles.homeButton}>
          <div className={styles.homeWrapper}>
            <a className={styles.home} onClick={onMainImageClick}>
              Home
            </a>
          </div>
          <div className={styles.headerDivider} />
        </div>
      </div>
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>
          <a className={styles.aboutUs1} onClick={onAboutUsTextClick}>
            About us
          </a>
        </div>
        <div className={styles.countriesDropdownParent}>
          <div className={styles.countriesDropdown}>
            <a className={styles.sectors}>Sectors</a>
          </div>
          <div className={styles.frameChild} />
          <img
            className={styles.expandArrowIcon}
            alt=""
            src="/expand-arrow@2x.png"
          />
        </div>
        <div className={styles.headerMenuItemParent}>
          <div className={styles.headerMenuItem}>
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
            <div className={styles.homeLink}>
              <img className={styles.homeLinkChild} loading="lazy" alt="" />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div
              className={styles.contactUsParent}
              onClick={onGroupContainerClick}
            >
              <a className={styles.contactUs}>Contact us</a>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.highlightsDropdown}>
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
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
