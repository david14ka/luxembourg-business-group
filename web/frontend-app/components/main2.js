import Header from "./header3";
import PropTypes from "prop-types";
import styles from "./main2.module.css";

const Main = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <Header group4="pending_1087:1857" />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
