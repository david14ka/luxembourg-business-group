import PropTypes from "prop-types";
import styles from "./frame-component21.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.ictWrapper}>
        <h1 className={styles.ict}>ICT</h1>
      </div>
      <div className={styles.contentPlaceholderParent}>
        <img
          className={styles.contentPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-972@2x.png"
        />
        <div className={styles.strengthContainer}>
          <b className={styles.strength}>Strength</b>
          <div className={styles.luxembourgStandsAs}>
            Luxembourg stands as a global hub for Information and Communication
            Technology (ICT), boasting one of the most advanced mobile and
            internet infrastructures in Europe. The nation's commitment to
            technological progress is evident in its robust support for ICT
            development. With a forward-thinking approach, Luxembourg not only
            provides a fertile ground for innovation but also actively nurtures
            the growth of the ICT sector, positioning itself as a dynamic player
            in the ever-evolving landscape of digital advancements.
          </div>
        </div>
        <div className={styles.challengesContainer}>
          <b className={styles.challenges}>Challenges :</b>
          <div className={styles.challengesPersistFor}>
            Challenges persist for the technological landscape in Luxembourg,
            characterized by a heavy reliance on technologies from outside
            Europe. The nation faces the drawback of lacking a robust sovereign
            technology base, hindering its autonomy in crucial sectors.
            Moreover, the shortage of sufficient talent poses a significant
            hurdle, impacting the country's ability to fully harness its
            technological potential. Compounding these challenges is the trend
            of losing professionals to other countries, leading to a potential
            brain drain that further exacerbates the scarcity of skilled
            individuals crucial for the nation's technological advancement.
            Addressing these issues becomes paramount for Luxembourg to
            strengthen its technological foundation and maintain competitiveness
            in the global arena.
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
