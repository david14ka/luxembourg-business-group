import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header1.module.css";

const Header = ({ className = "" }) => {
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
      <div className={styles.homeAboutWrapper}>
        <div className={styles.homeAbout}>
          <div className={styles.homeAboutLinks}>
            <a className={styles.home} onClick={onFrameImageClick}>
              Home
            </a>
          </div>
          <div className={styles.homeAboutLinks1}>
            <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </a>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.sectorsLabelParent}>
                <div className={styles.sectorsLabel}>
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
              <div className={styles.countriesLabelParent}>
                <div className={styles.countriesLabel}>
                  <div className={styles.countriesNameParent}>
                    <div className={styles.countriesName}>
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
                <img className={styles.groupIcon} alt="" />
              </div>
            </div>
            <div className={styles.frameDiv}>
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
      <div className={styles.searchSubscribe}>
        <div className={styles.searchParent}>
          <div className={styles.search}>
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
};

export default Header;
