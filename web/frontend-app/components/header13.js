import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header13.module.css";

const Header1 = ({ className = "", group4 }) => {
  const router = useRouter();

  const onHomeContentImageClick = useCallback(() => {
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
      <div className={styles.homeContentWrapper}>
        <img
          className={styles.homeContentIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onHomeContentImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.aboutContentWrapper}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutLinks}>
            <a className={styles.home} onClick={onHomeContentImageClick}>
              Home
            </a>
          </div>
          <div className={styles.aboutLinks1}>
            <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </a>
          </div>
          <div className={styles.sectorsContentParent}>
            <div className={styles.sectorsContent}>
              <div className={styles.sectorsTitleParent}>
                <div className={styles.sectorsTitle}>
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
            <div className={styles.frameParent}>
              <div className={styles.countriesTitleParent}>
                <div className={styles.countriesTitle}>
                  <div className={styles.countriesName}>
                    <div className={styles.countriesWrapper}>
                      <a className={styles.countries}>Countries</a>
                    </div>
                    <img
                      className={styles.expandArrowIcon1}
                      alt=""
                      src="/expand-arrow@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameWrapper}>
                <img className={styles.frameInner} alt="" src={group4} />
              </div>
            </div>
            <div className={styles.contactTitle}>
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
      <div className={styles.searchContentWrapper}>
        <div className={styles.searchContent}>
          <div className={styles.searchBar}>
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
