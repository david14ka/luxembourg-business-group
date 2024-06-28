import PropTypes from "prop-types";
import styles from "./content3.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.constructionWrapper}>
        <h1 className={styles.construction}>Construction</h1>
      </div>
      <div className={styles.constructionGrid}>
        <img
          className={styles.gridPlaceholderIcon}
          loading="lazy"
          alt=""
          src="/frame-978@2x.png"
        />
        <div className={styles.strengthChallenges}>
          <div className={styles.strength}>
            <b className={styles.strength1}>Strength</b>
            <div className={styles.theConstructionSector}>
              The construction sector in Luxembourg is experiencing robust
              growth fueled by a strong demand for both public and residential
              constructions. The industry is at the forefront of research and
              development in sustainable construction practices, emphasizing the
              integration of environmentally friendly solutions into the built
              environment. Notably, Luxembourg promotes the widespread use of
              Building Information Modelling (BIM), a cutting-edge technology
              that enhances efficiency and collaboration throughout the
              construction process. A key focus lies on improving the energy
              performance of buildings, with dedicated efforts toward renovation
              projects and the utilization of renewable energy sources. This
              comprehensive approach underscores Luxembourg's commitment to
              fostering a modern, sustainable, and forward-thinking construction
              sector that aligns with global trends and addresses environmental
              considerations.
            </div>
          </div>
          <div className={styles.challenges}>
            <b className={styles.challenges1}>Challenges :</b>
            <div className={styles.theConstructionSector1}>
              The construction sector in Luxembourg grapples with a set of
              challenges that require strategic solutions for continued growth
              and sustainability. One pressing concern is the need for qualified
              personnel and diversity within the workforce, emphasizing the
              importance of addressing skill gaps and fostering inclusivity in
              the industry. Material efficiency and waste management present
              ongoing challenges, urging the sector to explore innovative
              solutions that minimize environmental impact and maximize resource
              utilization. Tackling emissions of greenhouse gasses, including
              CO, CO2, CH₄, and N2O, is a crucial aspect in aligning
              construction practices with environmental goals. Additionally,
              inflation and high-interest rates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
