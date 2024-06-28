import PropTypes from "prop-types";
import styles from "./content-area.module.css";

const ContentArea = ({ className = "" }) => {
  return (
    <section className={[styles.contentArea, className].join(" ")}>
      <div className={styles.formContainerWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.formFields}>
            <div className={styles.nameFieldParent}>
              <div className={styles.nameField}>
                <div className={styles.nameInput} />
              </div>
              <h1 className={styles.getInTouch}>Get in touch with us</h1>
            </div>
            <div className={styles.getInTouch1}>
              Get in touch with Luxembourg Business Group to explore
              collaboration opportunities, request more information about our
              services. To schedule a meeting with one of our consultants,
              please fill in your contact details
            </div>
          </div>
          <div className={styles.addressContainerWrapper}>
            <div className={styles.addressContainer}>
              <div className={styles.addressDetails}>
                <div className={styles.addressField}>
                  <img
                    className={styles.addressIcon}
                    loading="lazy"
                    alt=""
                    src="/address@2x.png"
                  />
                </div>
              </div>
              <div className={styles.addressInfo}>
                <b className={styles.ourLocation}>Our Location</b>
                <div className={styles.skyviewRanchRd}>
                  210 Skyview Ranch Rd NE, Calgary, AB T3N 0P4, Canada
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactForm}>
        <b className={styles.fullName}>Full Name</b>
        <div className={styles.fullNameInput}>
          <div className={styles.fullNameContainer}>
            <div className={styles.enterYourFull}>Enter your full name</div>
          </div>
        </div>
        <div className={styles.contactFields}>
          <b className={styles.email}>Email</b>
          <div className={styles.contactInputs}>
            <div className={styles.enterYourEmail}>
              Enter your Email address
            </div>
          </div>
        </div>
        <div className={styles.contactFields1}>
          <b className={styles.yourMessage}>Your message</b>
          <div className={styles.typeYourTextHereWrapper}>
            <div className={styles.typeYourText}>Type your text here</div>
          </div>
        </div>
        <div className={styles.submitButton}>
          <b className={styles.submit}>Submit</b>
        </div>
      </div>
    </section>
  );
};

ContentArea.propTypes = {
  className: PropTypes.string,
};

export default ContentArea;
