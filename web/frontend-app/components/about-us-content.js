import PropTypes from "prop-types";
import styles from "./about-us-content.module.css";

const AboutUsContent = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsContent, className].join(" ")}>
      <div className={styles.storyContentParent}>
        <div className={styles.storyContent}>
          <img
            className={styles.storyContentChild}
            loading="lazy"
            alt=""
            src="/frame-64@2x.png"
          />
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/frame-65@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/frame-66@2x.png"
            />
          </div>
        </div>
        <div className={styles.storyParagraphWrapper}>
          <div className={styles.storyParagraph}>
            <div className={styles.storyParagraph1}>
              <div className={styles.storyParagraph2}>
                <div className={styles.storyImage} />
              </div>
              <h1 className={styles.ourStory}>Our Story</h1>
            </div>
            <div className={styles.atLuxembourgBusiness}>
              At Luxembourg Business Group, our journey began with a passion for
              fostering global connections and facilitating informed
              decision-making. Founded [insert founding year], our company has
              since evolved into a trusted name in the realm of comprehensive
              infographics from an economic perspective. Over the years, we've
              embarked on numerous ventures, collaborating with prominent
              stakeholders and influencers to produce impactful media content
              that resonates across borders.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUsContent.propTypes = {
  className: PropTypes.string,
};

export default AboutUsContent;
