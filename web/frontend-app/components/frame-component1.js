import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const onLatestArticlesContentClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <section className={[styles.hightlightsWrapper, className].join(" ")}>
      <div className={styles.hightlights}>
        <h2 className={styles.highlights}>Highlights</h2>
        <div className={styles.articles}>
          <div className={styles.collapseArrowWrapper}>
            <img
              className={styles.collapseArrowIcon}
              loading="lazy"
              alt=""
              src="/collapse-arrow@2x.png"
            />
          </div>
          <div className={styles.latestArticlesContentParent}>
            <div
              className={styles.latestArticlesContent}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels}>Top ranked hotels...</b>
              <div className={styles.posted25thApril}>Posted 25th April</div>
            </div>
            <div
              className={styles.latestArticlesContent1}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels1}>Uniformed sectors...</b>
              <div className={styles.posted25thApril1}>Posted 25th April</div>
            </div>
            <div
              className={styles.latestArticlesContent2}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels2}>Making your income</b>
              <div className={styles.posted25thApril2}>Posted 25th April</div>
            </div>
            <div
              className={styles.latestArticlesContent3}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels3}>Construction has ...</b>
              <div className={styles.posted25thApril3}>Posted 25th April</div>
            </div>
            <div
              className={styles.latestArticlesContent4}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels4}>Housing and estate</b>
              <div className={styles.posted25thApril4}>Posted 25th April</div>
            </div>
            <div
              className={styles.latestArticlesContent5}
              onClick={onLatestArticlesContentClick}
            >
              <b className={styles.topRankedHotels5}>New educations sec</b>
              <div className={styles.posted25thApril5}>Posted 25th April</div>
            </div>
          </div>
          <div className={styles.collapseArrowContainer}>
            <img
              className={styles.collapseArrowIcon1}
              alt=""
              src="/collapse-arrow-2@2x.png"
            />
          </div>
          <img
            className={styles.collapseArrowIcon2}
            alt=""
            src="/collapse-arrow-1@2x.png"
          />
        </div>
        <div className={styles.newsItem} />
        <div className={styles.newsImage} />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
