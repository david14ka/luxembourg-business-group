import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "../components/header11";
import Content from "../components/content";
import NewsItemContainer1 from "../components/news-item-container1";
import NewsItemContainer from "../components/news-item-container";
import NewsColumn from "../components/news-column";
import FrameComponent1 from "../components/frame-component11";
import FooterNavigation from "../components/footer-navigation1";
import styles from "./finance.module.css";

const Finance = () => {
  const router = useRouter();

  const onArticleItemContainerClick = useCallback(() => {
    router.push("/singlepost");
  }, [router]);

  const onReadMoreContainerClick = useCallback(() => {
    // Please sync "highlights" to the project
  }, []);

  return (
    <div className={styles.finance}>
      <div className={styles.frameParent}>
        <img className={styles.frameChild} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameItem} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-70@2x.png" />
      </div>
      <Header1 group4="pending_1087:1737" />
      <section className={styles.slider4}>
        <div className={styles.slide}>
          <div className={styles.slideContent}>
            <h1 className={styles.theForgeOf}>
              The Forge of Prosperity: Luxembourg's Steel Industry and Its
              Economic Impact
            </h1>
          </div>
          <div className={styles.slideDescription}>
            <h3 className={styles.luxembourgsSteelIndustry}>
              Luxembourg's steel industry has played a pivotal role in shaping
              the country's economic landscape. 
            </h3>
          </div>
          <div className={styles.readMore} onClick={onReadMoreContainerClick}>
            <b className={styles.readMore1}>{`Read more >`}</b>
          </div>
        </div>
        <div className={styles.sliderNavigation}>
          <img
            className={styles.sliderNavigationChild}
            loading="lazy"
            alt=""
            src="/group-29.svg"
          />
        </div>
      </section>
      <Content />
      <section className={styles.articles}>
        <div className={styles.articc}>
          <div className={styles.articleRow}>
            <NewsItemContainer1
              newsItemImage="/frame-162@2x.png"
              onNewsItemWrapperClick={onArticleItemContainerClick}
            />
            <NewsItemContainer
              newsItemWrapper="/frame-16-14@2x.png"
              theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
              aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onArticleItemContainerClick}
            />
            <NewsItemContainer
              newsItemWrapper="/frame-16@2x.png"
              theIEAHighlightedAlmostTw="The IEA highlighted almost two years ago that ..."
              aNewGlobalEnergyEconomyWa="a new global energy economy was emerging rapidly. Today, it has become a central pillar of"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onArticleItemContainerClick}
            />
          </div>
          <div className={styles.articleRow1}>
            <NewsItemContainer
              newsItemWrapper="/frame-16-31@2x.png"
              theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
              aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onArticleItemContainerClick}
            />
            <div className={styles.frameGroup}>
              <NewsItemContainer
                newsItemWrapper="/frame-16-41@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onArticleItemContainerClick}
              />
              <NewsItemContainer
                newsItemWrapper="/frame-16-4@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onArticleItemContainerClick}
              />
            </div>
          </div>
          <NewsColumn
            frame16="/frame-16-61@2x.png"
            onNewsItemWrapperClick={onArticleItemContainerClick}
            onNewsItemWrapperClick={onArticleItemContainerClick}
            onNewsItemWrapperClick={onArticleItemContainerClick}
          />
          <div className={styles.articleRow2}>
            <NewsItemContainer
              newsItemWrapper="/frame-162@2x.png"
              theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
              aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
              propHeight="27.5rem"
              propFlex="unset"
              propAlignSelf="stretch"
              propWidth="unset"
              onNewsItemWrapperClick={onArticleItemContainerClick}
            />
            <div className={styles.frameContainer}>
              <NewsItemContainer
                newsItemWrapper="/frame-16-13@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onArticleItemContainerClick}
              />
              <NewsItemContainer
                newsItemWrapper="/frame-16-12@2x.png"
                theIEAHighlightedAlmostTw="Energy Technology Perspectives 2023"
                aNewGlobalEnergyEconomyWa="The analysis shows the global market for key mass-manufactured clean energy technologies will be"
                propHeight="unset"
                propFlex="1"
                propAlignSelf="stretch"
                propWidth="unset"
                onNewsItemWrapperClick={onArticleItemContainerClick}
              />
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1
        propPadding="0rem var(--padding-60xl) 6.562rem var(--padding-59xl)"
        propGap="77px"
        propWidth="78.75rem"
        propPadding1="0rem var(--padding-xl)"
        propAlignSelf="unset"
        propPadding2="71px 23px 71px 20px"
      />
      <FooterNavigation propTextDecoration="none" />
    </div>
  );
};

export default Finance;
