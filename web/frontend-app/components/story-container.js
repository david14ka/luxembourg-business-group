import { useCallback } from "react";
import { useRouter } from "next/router";
import News2 from "./news2";
import News1 from "./news1";
import News from "./news";
import Ict from "./ict";
import PropTypes from "prop-types";
import styles from "./story-container.module.css";

const StoryContainer = ({ className = "" }) => {
  const router = useRouter();

  const onUSAButtonClick = useCallback(() => {
    router.push("/u-s-a");
  }, [router]);

  const onFinanceButtonContainerClick = useCallback(() => {
    router.push("/netherlands");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/france");
  }, [router]);

  const onSeeAllContainerClick = useCallback(() => {
    // Please sync "around" to the project
  }, []);

  const onUSASeeAllButtonAdvanceClick = useCallback(() => {
    router.push("/germany");
  }, [router]);

  const onUSASeeMoreButtonClick = useCallback(() => {
    router.push("/belgium");
  }, [router]);

  const onSeeAllContainerClick1 = useCallback(() => {
    // Please sync "featured countries" to the project
  }, []);

  return (
    <div className={[styles.storyContainer, className].join(" ")}>
      <div className={styles.storiesWrapper}>
        <div className={styles.storiesContent}>
          <News2
            iCT="Germany"
            propBackgroundImage="url('/news12@3x.png')"
            propAlignSelf="stretch"
            propFlex="unset"
            propMinWidth="unset"
            propMinWidth1="3.625rem"
          />
          <div className={styles.allStories}>
            <div className={styles.seeAll} onClick={onSeeAllContainerClick}>
              <div className={styles.seeAllWrapper}>
                <a className={styles.seeAll1}>{`see all `}</a>
              </div>
              <img
                className={styles.rightArrowIcon}
                alt=""
                src="/right-arrow@2x.png"
              />
            </div>
            <div className={styles.countriesTitle}>
              <h2 className={styles.featuredCountries}>Featured Countries</h2>
            </div>
          </div>
        </div>
        <div className={styles.countryNews}>
          <div className={styles.newsList}>
            <News1
              finance="France"
              propBackgroundImage="url('/news33@3x.png')"
              propMinWidth="2.125rem"
            />
            <News1
              finance="Switzerland"
              propBackgroundImage="url('/news34@3x.png')"
              propMinWidth="3.688rem"
            />
          </div>
          <div className={styles.newsList1}>
            <News
              rDAndInnovation="Germany"
              propWidth="unset"
              propBackgroundImage="url('/news43@3x.png')"
              propFlex="unset"
              propAlignSelf="stretch"
              propMinWidth="2.813rem"
            />
            <News
              rDAndInnovation="UAE"
              propWidth="unset"
              propBackgroundImage="url('/news44@3x.png')"
              propFlex="unset"
              propAlignSelf="stretch"
              propMinWidth="1.313rem"
            />
          </div>
        </div>
      </div>
      <div className={styles.featuredCountries1}>
        <div className={styles.countryHighlights}>
          <Ict
            uSALocationItems="/frame-57-5@2x.png"
            uSA="USA"
            luxembourgStandsAsAGlobal="Luxembourg stands as a global hub for Information and Communication Technology"
            onUSAButtonClick={onUSAButtonClick}
          />
          <div className={styles.finance}>
            <img
              className={styles.financeChild}
              alt=""
              src="/frame-57-6@2x.png"
            />
            <div className={styles.financeInner}>
              <div className={styles.germanyParent}>
                <b className={styles.germany}>Germany</b>
                <div className={styles.luxembourgStandsProudly}>
                  Luxembourg stands proudly as one of the world's foremost
                  financial centers
                </div>
              </div>
            </div>
            <div className={styles.exploreMore}>
              <div
                className={styles.uSASeeAllButtonAdvance}
                onClick={onUSASeeAllButtonAdvanceClick}
              >
                <img
                  className={styles.advanceIcon}
                  alt=""
                  src="/advance@2x.png"
                />
                <div className={styles.advanceViewContainer}>
                  <b className={styles.view}>View</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.finance1}>
            <img
              className={styles.financeItem}
              alt=""
              src="/frame-57-7@2x.png"
            />
            <div className={styles.frameDiv}>
              <div className={styles.belgiumParent}>
                <b className={styles.belgium}>Belgium</b>
                <div className={styles.luxembourgsSteelAndIndustrWrapper}>
                  <div className={styles.luxembourgsSteelAnd}>
                    Luxembourg's steel and industrial sector stands as a
                    formidable force on the global stage
                  </div>
                </div>
                <div
                  className={styles.uSASeeMoreButton}
                  onClick={onUSASeeMoreButtonClick}
                >
                  <img
                    className={styles.advanceIcon1}
                    alt=""
                    src="/advance@2x.png"
                  />
                  <div className={styles.readLink}>
                    <b className={styles.view1}>View</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Ict
            uSALocationItems="/frame-57-8@2x.png"
            uSA="Netherlands"
            luxembourgStandsAsAGlobal="The construction sector in Luxembourg is experiencing robust growth fueled by a strong demand"
            propHeight="unset"
            propWidth="unset"
            propFlex="1"
            propMinWidth="15.5rem"
            propFlex1="unset"
            propMaxHeight="unset"
            propHeight1="11.625rem"
            propWidth1="10.625rem"
            onUSAButtonClick={onFinanceButtonContainerClick}
          />
          <Ict
            uSALocationItems="/frame-57-9@2x.png"
            uSA="France"
            luxembourgStandsAsAGlobal="Luxembourg proudly stands as an Innovation Leader, solidifying its position as a beacon"
            propHeight="unset"
            propWidth="unset"
            propFlex="1"
            propMinWidth="15.5rem"
            propFlex1="unset"
            propMaxHeight="unset"
            propHeight1="11.625rem"
            propWidth1="10.625rem"
            onUSAButtonClick={onFrameContainerClick}
          />
        </div>
      </div>
      <div className={styles.featuredCountriesContainer}>
        <div className={styles.sectorsCountriesContainer}>
          <div className={styles.featuredCountriesContent}>
            <div className={styles.seeAll2} onClick={onSeeAllContainerClick1}>
              <div className={styles.seeAllCountriesLink}>
                <b className={styles.seeAll3}>{`see all `}</b>
              </div>
              <img
                className={styles.rightArrowIcon1}
                alt=""
                src="/right-arrow@2x.png"
              />
            </div>
          </div>
          <div className={styles.subscribe}>
            <h2 className={styles.stayInformedStayContainer}>
              <span>{`Stay Informed, Stay Connected: `}</span>
              <span className={styles.getTheLatest}>Get the Latest News</span>
              <span> Delivered to Your Inbox!</span>
            </h2>
            <div className={styles.subscriptionInputs}>
              <div className={styles.subscribeFormFields}>
                <div className={styles.enterYourEmail}>
                  Enter your email address
                </div>
              </div>
              <div className={styles.subscribeFormFields1}>
                <b className={styles.subscribe1}>Subscribe</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StoryContainer.propTypes = {
  className: PropTypes.string,
};

export default StoryContainer;
