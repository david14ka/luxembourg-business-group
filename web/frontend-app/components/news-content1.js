import { useCallback } from "react";
import NewsItems from "./news-items";
import { useRouter } from "next/router";
import FrameComponent5 from "./frame-component5";
import PropTypes from "prop-types";
import styles from "./news-content1.module.css";

const NewsContent1 = ({ className = "" }) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  return (
    <div className={[styles.newsContent, className].join(" ")}>
      <div className={styles.newsItemsParent}>
        <NewsItems newsItemPlaceholder="/frame-16@2x.png" />
        <div className={styles.newsItemsCopy}>
          <NewsItems
            newsItemPlaceholder="/frame-16-1@2x.png"
            propHeight="unset"
            propFlex="1"
          />
          <NewsItems
            newsItemPlaceholder="/frame-16@2x.png"
            propHeight="unset"
            propFlex="1"
          />
          <NewsItems
            newsItemPlaceholder="/frame-16@2x.png"
            propHeight="unset"
            propFlex="1"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup} onClick={onFrameContainerClick}>
          <img className={styles.frameChild} alt="" src="/frame-16-4@2x.png" />
          <div className={styles.energyTechnologyPerspectivesParent}>
            <b className={styles.energyTechnologyPerspectives}>
              Energy Technology Perspectives 2023
            </b>
            <div className={styles.theAnalysisShows}>
              The analysis shows the global market for key mass-manufactured
              clean energy technologies will be
            </div>
            <div className={styles.newsActions}>
              <div className={styles.newsActionIcons} />
              <div className={styles.ictPostedContainer}>
                <b>ICT</b>
                <span className={styles.posted25Min}> - Posted 25 min ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <FrameComponent5 frame16="/frame-16-5@2x.png" />
          <FrameComponent5
            frame16="/frame-16-4@2x.png"
            propFlex="1"
            propHeight="unset"
          />
          <FrameComponent5
            frame16="/frame-16-4@2x.png"
            propFlex="1"
            propHeight="unset"
          />
        </div>
      </div>
      <div className={styles.frameDiv}>
        <FrameComponent5
          frame16="/frame-16-8@2x.png"
          propFlex="unset"
          propHeight="27.5rem"
        />
        <div className={styles.frameParent1}>
          <FrameComponent5
            frame16="/frame-16-9@2x.png"
            propFlex="1"
            propHeight="unset"
          />
          <FrameComponent5
            frame16="/frame-16-8@2x.png"
            propFlex="1"
            propHeight="unset"
          />
          <FrameComponent5
            frame16="/frame-16-8@2x.png"
            propFlex="1"
            propHeight="unset"
          />
        </div>
      </div>
      <div className={styles.frameParent2}>
        <FrameComponent5
          frame16="/frame-16-12@2x.png"
          propFlex="unset"
          propHeight="27.5rem"
        />
        <div className={styles.frameParent3}>
          <FrameComponent5
            frame16="/frame-16-13@2x.png"
            propFlex="1"
            propHeight="unset"
          />
          <FrameComponent5
            frame16="/frame-16-12@2x.png"
            propFlex="1"
            propHeight="unset"
          />
          <FrameComponent5
            frame16="/frame-16-12@2x.png"
            propFlex="1"
            propHeight="unset"
          />
        </div>
      </div>
    </div>
  );
};

NewsContent1.propTypes = {
  className: PropTypes.string,
};

export default NewsContent1;
