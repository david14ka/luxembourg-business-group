import { useCallback } from "react";
import { useRouter } from "next/router";
import Main1 from "../components/main1";
import ContentArea from "../components/content-area";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import styles from "./contact.module.css";

const Contact = () => {
  const router = useRouter();

  const onCountriesTitlePlaceholderClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.contact}>
      <Main1 />
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <ContentArea />
      <Newsletter
        newsletterAlignSelf="stretch"
        newsletterPadding="0rem var(--padding-47xl) 5.562rem var(--padding-46xl)"
        newsletterWidth="unset"
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <Footer
        privacyPolicyTextDecoration="none"
        onHomeContentImageClick={onCountriesTitlePlaceholderClick}
      />
    </div>
  );
};

export default Contact;
