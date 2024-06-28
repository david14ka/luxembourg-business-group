import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header2.module.css";

const Header = ({ className = "", group4 }) => {
  const router = useRouter();

  const onFrameImageClick = useCallback(() => {
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
      <div className={styles.headerInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onFrameImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.frameDiv}>
        <div className={styles.homeAboutUsLinkParent}>
          <div className={styles.homeAboutUsLink}>
            <a className={styles.home} onClick={onFrameImageClick}>
              Home
            </a>
          </div>
          <div className={styles.homeAboutUsLink1}>
            <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </a>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.sectorDropdownParent}>
                <div className={styles.sectorDropdown}>
                  <a className={styles.sectors}>Sectors</a>
                </div>
                <div className={styles.frameItem} />
                <img
                  className={styles.expandArrowIcon}
                  alt=""
                  src="/expand-arrow@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.countryDropdownParent}>
                <div className={styles.countryDropdown}>
                  <div className={styles.countryDropdownContent}>
                    <div className={styles.countryDropdownItem}>
                      <a className={styles.countries}>Countries</a>
                    </div>
                    <img
                      className={styles.expandArrowIcon1}
                      alt=""
                      src="/expand-arrow@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameContainer}>
                <img className={styles.groupIcon} alt="" src={group4} />
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div
                className={styles.contactUsParent}
                onClick={onGroupContainerClick}
              >
                <a className={styles.contactUs}>Contact us</a>
                <div className={styles.lineDiv} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchSubscribeContentWrapper}>
        <div className={styles.searchSubscribeContent}>
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
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  group4: PropTypes.string,
};

export default Header;
