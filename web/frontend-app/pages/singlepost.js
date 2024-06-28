import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import ArticleContainer from "../components/article-container";
import SocialShareContainer from "../components/social-share-container";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import styles from "./singlepost.module.css";

const Singlepost = () => {
  const router = useRouter();

  const onFooterCountriesImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.singlepost}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header group4="pending_1087:1929" />
      <main className={styles.bannerContainer}>
        <section className={styles.bannerImageContainer}>
          <div className={styles.bannerImageWrapper}>
            <div className={styles.bannerImagePlaceholder}>
              <div className={styles.photoCreditPhotoContainer}>
                {`photo credit: Photo by `}
                <a
                  className={styles.spacejoy}
                  href={`https://unsplash.com/@spacejoy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                  target="_blank"
                >
                  <span className={styles.spacejoy1}>Spacejoy</span>
                </a>
                {` on `}
                <a
                  className={styles.unsplash}
                  href={`https://unsplash.com/photos/2-brown-wooden-armchairs-beside-white-wall-1vieZivk1As?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                  target="_blank"
                >
                  <span className={styles.unsplash1}>Unsplash</span>
                </a>
              </div>
            </div>
          </div>
          <ArticleContainer />
          <div className={styles.articleImageContainer}>
            <div className={styles.articleImageWrapper}>
              <div className={styles.articleImagePlaceholder}>
                <div className={styles.photoBySpacejoyContainer}>
                  {`Photo by `}
                  <a
                    className={styles.spacejoy2}
                    href={`https://unsplash.com/@spacejoy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                    target="_blank"
                  >
                    <span className={styles.spacejoy3}>Spacejoy</span>
                  </a>
                  {` on `}
                  <a
                    className={styles.unsplash2}
                    href={`https://unsplash.com/photos/2-brown-wooden-armchairs-beside-white-wall-1vieZivk1As?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                    target="_blank"
                  >
                    <span className={styles.unsplash3}>Unsplash</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.articleImageWrapper1}>
              <div className={styles.photoBySpacejoyOnUnsplashWrapper}>
                <div className={styles.photoBySpacejoyContainer1}>
                  {`Photo by `}
                  <a
                    className={styles.spacejoy4}
                    href={`https://unsplash.com/@spacejoy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                    target="_blank"
                  >
                    <span className={styles.spacejoy5}>Spacejoy</span>
                  </a>
                  {` on `}
                  <a
                    className={styles.unsplash4}
                    href={`https://unsplash.com/photos/2-brown-wooden-armchairs-beside-white-wall-1vieZivk1As?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash`}
                    target="_blank"
                  >
                    <span className={styles.unsplash5}>Unsplash</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.articleContentContinued}>
            <div className={styles.loremIpsumIsSimplyContainer}>
              <p className={styles.loremIpsumIsSimply}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className={styles.whyDoWe}>Why do we use it?</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p
                className={styles.itIsA}
              >{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages `}</p>
            </div>
          </div>
          <SocialShareContainer />
          <Newsletter
            newsletterAlignSelf="unset"
            newsletterPadding="0rem var(--padding-6xs)"
            newsletterWidth="82.688rem"
          />
        </section>
      </main>
      <Footer
        privacyPolicyTextDecoration="unset"
        onHomeContentImageClick={onFooterCountriesImageClick}
      />
    </div>
  );
};

export default Singlepost;
