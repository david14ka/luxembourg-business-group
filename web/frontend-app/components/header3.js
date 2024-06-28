import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header3.module.css";

const Header = ({
  className = "",
  group4,
  homeLinkFlex,
  homeLinkAlignSelf,
  homeLinkTop,
  homeLinkPosition,
}) => {
  const headerStyle = useMemo(() => {
    return {
      flex: homeLinkFlex,
      alignSelf: homeLinkAlignSelf,
      top: homeLinkTop,
      position: homeLinkPosition,
    };
  }, [homeLinkFlex, homeLinkAlignSelf, homeLinkTop, homeLinkPosition]);

  const router = useRouter();

  const onHeaderItemsImageClick = useCallback(() => {
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
    <header
      className={[styles.header, className].join(" ")}
      style={headerStyle}
    >
      <div className={styles.headerContent}>
        <img
          className={styles.headerItemsIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onHeaderItemsImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.homeLink}>
            <a className={styles.home} onClick={onHeaderItemsImageClick}>
              Home
            </a>
          </div>
          <div className={styles.homeLink1}>
            <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
              About us
            </a>
          </div>
          <div className={styles.sectorsDropdownParent}>
            <div className={styles.sectorsDropdown}>
              <a className={styles.sectors}>Sectors</a>
            </div>
            <div className={styles.frameChild} />
            <img
              className={styles.expandArrowIcon}
              alt=""
              src="/expand-arrow@2x.png"
            />
          </div>
          <div className={styles.countriesDropdown}>
            <div className={styles.countriesContent}>
              <div className={styles.countriesLabelParent}>
                <div className={styles.countriesLabel}>
                  <a className={styles.countries}>Countries</a>
                </div>
                <div className={styles.frameItem} />
                <img
                  className={styles.expandArrowIcon1}
                  alt=""
                  src="/expand-arrow@2x.png"
                />
              </div>
              <div className={styles.contactDropdown}>
                <img
                  className={styles.contactDropdownChild}
                  loading="lazy"
                  alt=""
                  src={group4}
                />
              </div>
            </div>
            <div className={styles.contactUs}>
              <div
                className={styles.contactUsParent}
                onClick={onGroupContainerClick}
              >
                <a className={styles.contactUs1}>Contact us</a>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchItemsWrapper}>
        <div className={styles.searchItems}>
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

Header.propTypes = {
  className: PropTypes.string,
  group4: PropTypes.string,

  /** Style props */
  homeLinkFlex: PropTypes.any,
  homeLinkAlignSelf: PropTypes.any,
  homeLinkTop: PropTypes.any,
  homeLinkPosition: PropTypes.any,
};

export default Header;
