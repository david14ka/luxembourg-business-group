import PropTypes from "prop-types";
import styles from "./frame-component32.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={[styles.innovationTitleParent, className].join(" ")}>
      <div className={styles.innovationTitle}>
        <h1 className={styles.rdAndInnovation}>{`R&D and Innovation`}</h1>
      </div>
      <div className={styles.contentColumns}>
        <img
          className={styles.emptyColumnIcon}
          loading="lazy"
          alt=""
          src="/frame-979@2x.png"
        />
        <div className={styles.contentColumn}>
          <div className={styles.strengthContent}>
            <b className={styles.strength}>Strength</b>
            <div className={styles.luxembourgProudlyStands}>
              Luxembourg proudly stands as an Innovation Leader, solidifying its
              position as a beacon of ingenuity and technological advancement.
              Garnering the coveted title of N°1 in Europe for Attractive
              Research Systems in 2022, the nation's commitment to fostering
              innovation is underscored by its strong innovator status, boasting
              a performance at an impressive 118.6% of the EU average.
              Luxembourg's research institutions further bolster this
              reputation, being equipped with cutting-edge technology and
              resources that facilitate groundbreaking discoveries and
              advancements. Notably, research holds a prominent place on the
              national agenda, as it is prioritized by the government,
              reflecting a strategic commitment to propelling the country to the
              forefront of global innovation and knowledge creation.
            </div>
          </div>
          <div className={styles.challengeContent}>
            <b className={styles.challenges}>Challenges :</b>
            <div className={styles.challengeDescription}>
              <div className={styles.luxembourgsPursuitOf}>
                Luxembourg's pursuit of becoming a widely recognized hub for
                research and innovation in Europe is accompanied by a set of
                challenges. The first challenge involves the need to consolidate
                existing efforts and push further to enhance the nation's
                reputation as a prominent center for research and innovation.
                This entails not only sustaining ongoing initiatives but also
                advancing them to new heights, ensuring that Luxembourg remains
                at the forefront of cutting-edge discoveries. The second
                challenge centers around supporting individuals poised to
                transform visionary ideas into tangible projects. Nurturing this
                transition from conceptualization to implementation is crucial
                for harnessing the full potential of innovative thinking.
                Additionally, the challenge extends to bridging the gap between
                research outcomes and market penetration, facilitating the
                seamless transition of groundbreaking research into practical
                applications that benefit society and the economy. Addressing
                these challenges requires a holistic approach, emphasizing
                collaboration, strategic investment, and continuous support for
                individuals driving the transformative journey from vision to
                impactful projects.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
