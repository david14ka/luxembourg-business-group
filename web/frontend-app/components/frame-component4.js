import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
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
    <section className={[styles.headerParent, className].join(" ")}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <img
            className={styles.navbarChild}
            loading="lazy"
            alt=""
            src="/frame-1@2x.png"
            onClick={onFrameImageClick}
          />
        </div>
        <div className={styles.headerChild} />
        <div className={styles.headerInner}>
          <div className={styles.frameParent}>
            <div className={styles.homeWrapper}>
              <a className={styles.home} onClick={onFrameImageClick}>
                Home
              </a>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.aboutUsWrapper}>
                  <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                    About us
                  </a>
                </div>
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.groupDiv}>
                <div className={styles.sectorsWrapper}>
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
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.countriesWrapper}>
                    <a className={styles.countries}>Countries</a>
                  </div>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.expandArrowIcon1}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
                <div className={styles.frameWrapper1}>
                  <img className={styles.groupIcon} loading="lazy" alt="" />
                </div>
              </div>
              <div className={styles.frameWrapper2}>
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
        <div className={styles.headerInner1}>
          <div className={styles.frameParent3}>
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
      <div className={styles.aboutUsContainer}>
        <h1 className={styles.aboutUs1}>About us</h1>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
