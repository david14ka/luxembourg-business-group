import PropTypes from "prop-types";
import styles from "./content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.title}>
        <h1 className={styles.steelIndustrial}>{`Steel & Industrial`}</h1>
      </div>
      <div className={styles.body}>
        <img
          className={styles.placeholderIcon}
          loading="lazy"
          alt=""
          src="/frame-974@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.strengthParent}>
            <b className={styles.strength}>Strength</b>
            <div className={styles.luxembourgsSteelAnd}>
              Luxembourg's steel and industrial sector stands as a formidable
              force on the global stage, serving as the headquarters for
              industry leaders. Contributing significantly to the nation's
              economic vitality, this sector accounts for an impressive 12.3% of
              the GDP and employs 9.4% of the active population. Central to its
              success is a liberal, flexible, and innovative legal framework
              that fosters an environment conducive to industrial growth and
              innovation. With a robust and enduring track record in
              manufacturing, Luxembourg has established itself as a reliable and
              efficient hub for industrial activities. Moreover, the sector
              provides an innovative platform for engineering and technologies,
              positioning Luxembourg at the forefront of advancements in
              industrial practices and technologies.
            </div>
          </div>
          <div className={styles.challengesParent}>
            <b className={styles.challenges}>Challenges :</b>
            <div className={styles.theSteelAnd}>
              The steel and industrial sector in Luxembourg faces a set of
              particular challenges. Firstly, the sector is confronted with the
              perception of being environmentally unfriendly, requiring a
              significant effort to adopt sustainable practices and enhance its
              eco-friendly image. Additionally, the presence of unfinished
              projects poses a hurdle to the sector's overall efficiency,
              necessitating a focus on project completion and operational
              optimization. Energy consumption and waste production present
              ongoing concerns, prompting the industry to explore and implement
              more sustainable and resource-efficient processes. Moreover, the
              sector contends with the price volatility of raw materials,
              requiring adaptability and risk mitigation strategies to navigate
              the fluctuations in the market. Addressing these challenges is
              pivotal for Luxembourg's steel and industrial sector to maintain
              competitiveness, sustainability, and long-term viability in the
              evolving global industrial landscape.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
