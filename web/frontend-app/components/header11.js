import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./header11.module.css";

const Header1 = ({ className = "", group4 }) => {
  const router = useRouter();

  const onNavigationItemImageClick = useCallback(() => {
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
      <div className={styles.navigation}>
        <img
          className={styles.navigationItemIcon}
          loading="lazy"
          alt=""
          src="/frame-1@2x.png"
          onClick={onNavigationItemImageClick}
        />
      </div>
      <div className={styles.headerChild} />
      <div className={styles.headerItem} />
      <div className={styles.navigationItem}>
        <div className={styles.navigationItem1}>
          <div className={styles.navigationItem2}>
            <a className={styles.home} onClick={onNavigationItemImageClick}>
              Home
            </a>
          </div>
          <div className={styles.navigationItem3}>
            <div className={styles.navigationItem4}>
              <a className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About us
              </a>
            </div>
            <div className={styles.dropdownItemParent}>
              <div className={styles.dropdownItem}>
                <div className={styles.dropdownItem1}>
                  <div className={styles.dropdownItem2}>
                    <a className={styles.sectors}>Sectors</a>
                  </div>
                  <img
                    className={styles.expandArrowIcon}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
              </div>
              <div className={styles.dropdownDivider} />
            </div>
            <div className={styles.dropdownItem3}>
              <div className={styles.dropdownItem4}>
                <div className={styles.dropdownItemGroup}>
                  <div className={styles.dropdownItem5}>
                    <a className={styles.countries}>Countries</a>
                  </div>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.expandArrowIcon1}
                    alt=""
                    src="/expand-arrow@2x.png"
                  />
                </div>
                <div className={styles.dropdownItem6}>
                  <img
                    className={styles.dropdownItemChild}
                    loading="lazy"
                    alt=""
                    src={group4}
                  />
                </div>
              </div>
              <div className={styles.dropdownItem7}>
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
      <div className={styles.searchBar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search@2x.png"
              onClick={onSearchIconClick}
            />
          </div>
          <div className={styles.subscribeContainer}>
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
