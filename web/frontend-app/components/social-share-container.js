import { useCallback } from "react";
import Rcnews from "./rcnews";
import PropTypes from "prop-types";
import styles from "./social-share-container.module.css";

const SocialShareContainer = ({ className = "" }) => {
  const onPrevContainerClick = useCallback(() => {
    // Please sync "hightlight single post" to the project
  }, []);

  const onNextContainerClick = useCallback(() => {
    // Please sync "hightlight single post2" to the project
  }, []);

  return (
    <div className={[styles.socialShareContainer, className].join(" ")}>
      <div className={styles.socialShareItems}>
        <div className={styles.shareButtonContainer}>
          <div className={styles.shareButtonWrapper}>
            <div className={styles.shareDivider} />
            <div className={styles.shareButtonLabelContainer}>
              <div className={styles.shareButtonLabelWrapper}>
                <img className={styles.shareIcon} alt="" src="/share@2x.png" />
                <div className={styles.shareLabelWrapper}>
                  <b className={styles.sharePost}>Share post</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.articleNavigationContainer}>
          <div className={styles.articleNavigationItems}>
            <div className={styles.prev} onClick={onPrevContainerClick}>
              <img
                className={styles.rcnews3Icon}
                loading="lazy"
                alt=""
                src="/rcnews3@2x.png"
              />
              <div className={styles.previousArticleContent}>
                <div className={styles.previousArticleTitleContain}>
                  <div className={styles.previousArticleTitleWrapper}>
                    <div
                      className={styles.previousArticle}
                    >{`<  Previous article`}</div>
                  </div>
                  <b className={styles.jpMorgansPresence}>
                    JP Morgan's presence in Luxembourg reflects its commitment
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.next} onClick={onNextContainerClick}>
              <div className={styles.nextArticleLink}>
                <div className={styles.nextArticleContent}>
                  <div className={styles.nextArticleTitleContainer}>
                    <div
                      className={styles.nextArticle}
                    >{`Next article  >`}</div>
                  </div>
                  <b className={styles.deutscheBankLuxembourg}>
                    Deutsche Bank Luxembourg S.A., established in 1970, in midst
                    of positivity
                  </b>
                </div>
              </div>
              <img
                className={styles.rcnews3Icon1}
                loading="lazy"
                alt=""
                src="/rcnews3-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.relatedArticlesContainer}>
          <div className={styles.relatedArticlesTitle}>
            <h1 className={styles.relatedArticles}>Related articles</h1>
          </div>
          <div className={styles.relatedArticlesList}>
            <Rcnews
              relatedArticleImagePlaceh="/rectangle-3@2x.png"
              jPMorgansPresenceInLuxemb="JP Morgan's presence in Luxembourg reflects its commitment"
              thFebruary2024="12th February, 2024"
            />
            <Rcnews
              relatedArticleImagePlaceh="/rectangle-4@2x.png"
              jPMorgansPresenceInLuxemb="Deutsche Bank Luxembourg S.A., established in 1970,"
              thFebruary2024="6th March, 2024"
              propPadding="0rem var(--padding-11xs) 0rem 0rem"
              propMinWidth="5.938rem"
            />
            <Rcnews
              relatedArticleImagePlaceh="/rectangle-5@2x.png"
              jPMorgansPresenceInLuxemb="In the city of luxembou stands the hope fo the society at large"
              thFebruary2024="15th March, 2024"
              propPadding="0rem var(--padding-10xs) 0rem 0rem"
              propMinWidth="6.25rem"
            />
            <Rcnews
              relatedArticleImagePlaceh="/rectangle-3-1@2x.png"
              jPMorgansPresenceInLuxemb="Special interview with the finance minister of agriculture and logistic"
              thFebruary2024="9 hours ago"
              propPadding="0rem var(--padding-11xs) 0rem 0rem"
              propMinWidth="4.25rem"
            />
            <Rcnews
              relatedArticleImagePlaceh="/rectangle-5-1@2x.png"
              jPMorgansPresenceInLuxemb="In the city of luxembou stands the hope fo the society at large"
              thFebruary2024="15th March, 2024"
              propPadding="0rem var(--padding-11xs) 0rem 0rem"
              propMinWidth="6.25rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SocialShareContainer.propTypes = {
  className: PropTypes.string,
};

export default SocialShareContainer;
