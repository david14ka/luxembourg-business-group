import { useCallback } from "react";
import NewsContent from "./news-content2";
import FrameComponent from "./frame-component8";
import PropTypes from "prop-types";
import styles from "./content-items.module.css";

const ContentItems = ({ className = "" }) => {
  const onNewsContentContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  return (
    <div className={[styles.contentItems, className].join(" ")}>
      <div className={styles.mainArticle}>
        <div className={styles.articleHeader}>
          <div className={styles.theIeaHighlighted}>
            The IEA highlighted almost two years ago that
          </div>
        </div>
        <img
          className={styles.searchMoreIcon}
          alt=""
          src="/search-more@2x.png"
        />
      </div>
      <div className={styles.searchResults}>
        <div className={styles.searchResultsTitle}>
          <h1 className={styles.showingResultsForContainer}>
            <span>{`Showing results for: `}</span>
            <b>The IEA highlighted almost two years ago that</b>
          </h1>
          <div className={styles.filterPills}>
            <div className={styles.filterPillItems}>
              <div className={styles.filterPill}>
                <b className={styles.all}>All</b>
                <div className={styles.k}>249.8k</div>
              </div>
              <div className={styles.categories}>
                <div className={styles.categoryItems}>
                  <div className={styles.categoryLabels}>
                    <b className={styles.finance}>Finance</b>
                    <div className={styles.k1}>9.8k</div>
                  </div>
                  <div className={styles.categoryLabels1}>
                    <b className={styles.construction}>Construction</b>
                    <div className={styles.div}>800</div>
                  </div>
                </div>
              </div>
              <div className={styles.steelIndustry}>
                <div className={styles.steelIndustryLabel}>
                  <b className={styles.steelIndustry1}>{`Steel & industry`}</b>
                  <div className={styles.industrySeparator}>202</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsFeed}>
          <div className={styles.newsItems}>
            <div className={styles.newsItem}>
              <NewsContent
                newsImage="/frame-16@2x.png"
                onNewsContentContainerClick={onNewsContentContainerClick}
              />
              <div className={styles.newsItemDetails}>
                <NewsContent
                  newsImage="/frame-16-1@2x.png"
                  propHeight="unset"
                  propFlex="1"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <NewsContent
                  newsImage="/frame-16@2x.png"
                  propHeight="unset"
                  propFlex="1"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <NewsContent
                  newsImage="/frame-16@2x.png"
                  propHeight="unset"
                  propFlex="1"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
              </div>
            </div>
            <div className={styles.newsItem1}>
              <div
                className={styles.frameParent}
                onClick={onNewsContentContainerClick}
              >
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-16-4@2x.png"
                />
                <div className={styles.energyTechnologyPerspectivesParent}>
                  <b className={styles.energyTechnologyPerspectives}>
                    Energy Technology Perspectives 2023
                  </b>
                  <div className={styles.theAnalysisShows}>
                    The analysis shows the global market for key
                    mass-manufactured clean energy technologies will be
                  </div>
                  <div className={styles.newsIcons}>
                    <div className={styles.newsIconsChild} />
                    <div className={styles.ictPostedContainer}>
                      <b>ICT</b>
                      <span className={styles.posted25Min}>
                        {" "}
                        - Posted 25 min ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <FrameComponent
                  frame16="/frame-16-5@2x.png"
                  finance="Finance"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-4@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-4@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
              </div>
            </div>
            <div className={styles.newsItem2}>
              <FrameComponent
                frame16="/frame-16-8@2x.png"
                finance="Finance"
                propFlex="unset"
                propHeight="27.5rem"
                onNewsContentContainerClick={onNewsContentContainerClick}
              />
              <div className={styles.frameContainer}>
                <FrameComponent
                  frame16="/frame-16-9@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-8@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-8@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
              </div>
            </div>
            <div className={styles.newsItem3}>
              <FrameComponent
                frame16="/frame-16-12@2x.png"
                finance="Finance"
                propFlex="unset"
                propHeight="27.5rem"
                onNewsContentContainerClick={onNewsContentContainerClick}
              />
              <div className={styles.frameDiv}>
                <FrameComponent
                  frame16="/frame-16-13@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-12@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
                <FrameComponent
                  frame16="/frame-16-12@2x.png"
                  finance="Finance"
                  propFlex="1"
                  propHeight="unset"
                  onNewsContentContainerClick={onNewsContentContainerClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentItems.propTypes = {
  className: PropTypes.string,
};

export default ContentItems;
