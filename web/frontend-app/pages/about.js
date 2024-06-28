import FrameComponent4 from "../components/frame-component4";
import AboutUsContent from "../components/about-us-content";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer1 from "../components/footer1";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <FrameComponent4 />
      <section className={styles.aboutInner}>
        <div className={styles.frameParent}>
          <div className={styles.countryListWrapper}>
            <div className={styles.countryList}>
              <div className={styles.subCountryList}>
                <div className={styles.subCountryList1}>
                  <div className={styles.subCountryListChild} />
                </div>
                <h1 className={styles.introduction}>Introduction</h1>
              </div>
              <div className={styles.welcomeToLuxembourg}>
                Welcome to Luxembourg Business Group, your premier destination
                for insightful media production. Founded with a vision to bridge
                the gap between European visionaries and the global business
                community, we specialize in creating compelling documentaries
                and reports that delve deep into the heart of various countries
                and regions. Our mission is to unearth trade opportunities,
                uncover investment potentials, and provide invaluable resources
                for decision-makers and opinion leaders worldwide.
              </div>
            </div>
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-63@2x.png"
          />
        </div>
      </section>
      <AboutUsContent />
      <div className={styles.frameGroup}>
        <img className={styles.frameItem} alt="" src="/frame-67@2x.png" />
        <img className={styles.frameInner} alt="" src="/frame-69@2x.png" />
        <img className={styles.frameIcon} alt="" src="/frame-68@2x.png" />
        <img className={styles.frameChild1} alt="" src="/frame-70@2x.png" />
      </div>
      <section className={styles.aboutChild}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.rectangleDiv} />
                </div>
                <h1 className={styles.ourVision}>Our vision</h1>
              </div>
              <div className={styles.ourImpactfulReports}>
                Our impactful reports are not just pieces of information; they
                are strategic bridges connecting European visionaries with the
                rest of the business world. By staying true to our mission, we
                aim to keep you informed with up-to-date information on business
                opportunities and the latest developments across the globe.
              </div>
            </div>
          </div>
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/frame-76@2x.png"
          />
        </div>
      </section>
      <section className={styles.partnerContentWrapper}>
        <div className={styles.partnerContent}>
          <div className={styles.partnerContent1}>
            <h1 className={styles.countriesWePartner}>
              Countries we partner with
            </h1>
          </div>
          <div className={styles.theFollowingShowcased}>
            The following showcased nations aren't just destinations, they are
            our esteemed partners. Discover the essence of economic
            collaboration through concise yet impactful insights, offering a
            unique lens into the pivotal relationships shaping global trade and
            investment.
          </div>
        </div>
      </section>
      <FrameComponent3
        uSA="USA"
        frame97="/frame-97@2x.png"
        whyUSA="Why USA"
        globalEconomicGiantMaking="Global economic giant, making it a crucial player in international trade and investment"
        strategicPartnerForManyCo="Strategic partner for many countries in various sectors, such as trade, investment, security, and diplomacy."
        keyDriverOfTheDigitalTran="Key driver of the digital transformation, with a leading role in developing and deploying new technologies"
        essentialContributorToAdd="Essential contributor to addressing global challenges"
        housingCrisisWithRisingPr="Housing crisis, with rising prices, low supply, and high demand"
        declineOfPrivacyWithIncre="Decline of privacy, with increasing surveillance, data breaches, and cyberattacks"
        regulatoryBurdenThatHampe="Regulatory burden that hamper innovation and competitiveness"
        challengeOfClimateChange="Challenge of climate change"
      />
      <FrameComponent2
        germany="Germany"
        frame97="/frame-97-1@2x.png"
        whyGermany="Why Germany"
        secondInTheWorldInThe2022="Second in the world in the 2022 Bloomberg Innovation Index"
        globalLeaderInInnovationA="Global leader in innovation and technology"
        strongExportOrientedEcono="Strong export-oriented economy and manufacturing prowers"
        highExportQuotaWhichRefle="High export quota, which reflects its openness and integration in the global economy"
        digitalizationAndAutomati="Digitalization and automation could disrupt its labor market and industrial base"
        demographicChangeCouldRed="Demographic change could reduce labor force and increase its social spending"
        globalizationAndExpositio="Globalization and exposition to external shocks and competition"
        phaseOutCoalIncreaseItsRe="Phase out coal, increase its renewable energy sources, and promote green finance"
      />
      <section className={styles.belgiumContentParent}>
        <div className={styles.belgiumContent}>
          <h2 className={styles.belgium}>Belgium</h2>
        </div>
        <div className={styles.belgiumDetails}>
          <img
            className={styles.belgiumWhyIcon}
            alt=""
            src="/frame-97-2@2x.png"
          />
          <div className={styles.belgiumWhy}>
            <b className={styles.whyBelgium}>Why Belgium</b>
            <div className={styles.ranked12thInContainer}>
              <ul className={styles.ranked12thInTheWorldInTh}>
                <li className={styles.ranked12thIn}>
                  Ranked 12th in the world in the 2022 SJR - International
                  Science Ranking
                </li>
                <li className={styles.strongPublicInvestment}>
                  Strong public investment which enhances the productivity and
                  resilience of the economy.
                </li>
                <li className={styles.diversifiedAndIndustrialized}>
                  Diversified and industrialized economy, with competitive
                  sectors such as services, biotechnology, transportation, and
                  exports
                </li>
                <li>
                  Multilingual and skilled workforce, with a high level of
                  education and proficiency in French, Dutch, German, and
                  English
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.belgiumChallenges}>
            <div className={styles.belgiumChallengesContent}>
              <b className={styles.challenges}>Challenges :</b>
            </div>
            <div className={styles.globalCompetitionAndContainer}>
              <ul className={styles.globalCompetitionAndDigital}>
                <li className={styles.globalCompetitionAnd}>
                  Global competition and digital disruption
                </li>
                <li className={styles.lowWorkforceParticipation}>
                  Low workforce participation rate
                </li>
                <li className={styles.unbalancedPublicFinances}>
                  Unbalanced public finances pose a risk to fiscal
                  sustainability and credibility
                </li>
                <li>
                  High inflation eroding the purchasing power of households and
                  businesses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2
        germany="Netherlands"
        frame97="/frame-97-3@2x.png"
        whyGermany="Why The Netherlands"
        secondInTheWorldInThe2022="Fourth in the world in the 2022 Global Innovation Index"
        globalLeaderInInnovationA="Highest English proficiency in the world, with nine out of every ten people speaking English as a second language"
        strongExportOrientedEcono="Netherlands is home to the International Court of Justice"
        highExportQuotaWhichRefle="Sixth in the world in the 2022 Global Competitiveness Report"
        digitalizationAndAutomati="Urgency of the transition to net zero"
        demographicChangeCouldRed="Aging-related fiscal pressures"
        globalizationAndExpositio="Pervasive labor shortages"
        phaseOutCoalIncreaseItsRe="Supporting and up skilling of the workforce"
        propPadding="0rem var(--padding-29xl) var(--padding-30xl) var(--padding-xl)"
        propPadding1="0rem var(--padding-xl) 0rem var(--padding-19xl)"
      />
      <FrameComponent1 />
      <FrameComponent2
        germany="Switzerland"
        frame97="/frame-97-5@2x.png"
        whyGermany="Why Switzerland"
        secondInTheWorldInThe2022="Switzerland has the second highest per capita GDP in the world"
        globalLeaderInInnovationA="First in the world in the 2022 Global Innovation Index"
        strongExportOrientedEcono="Second in the world in the 2022 Global Competitiveness Report"
        highExportQuotaWhichRefle="Third in the world in the 2022 Human Development Index"
        digitalizationAndAutomati="The geopolitical tensions and elevated uncertainty"
        demographicChangeCouldRed="Reduced trade and investment"
        globalizationAndExpositio="Digital revolution"
        phaseOutCoalIncreaseItsRe="Tax haven stereotype"
        propPadding="0rem var(--padding-11xl) var(--padding-7xl) var(--padding-xl)"
        propPadding1="0rem var(--padding-2xl) 0rem var(--padding-xl)"
      />
      <FrameComponent3
        uSA="United Arab Emirates"
        frame97="/frame-97-6@2x.png"
        whyUSA="Why United Arab Emirates"
        globalEconomicGiantMaking="One of the highest per capita GDP in the world"
        strategicPartnerForManyCo="Tax-free environment, with no income tax or corporate tax for most businesses"
        keyDriverOfTheDigitalTran="World’s first government ministry for artificial intelligence"
        essentialContributorToAdd="Seventh-largest proven reserves of both crude oil and natural gas in the world"
        housingCrisisWithRisingPr="Decline in oil output resulting from OPEC-agreed production cuts"
        declineOfPrivacyWithIncre="Dependence on oil revenues"
        regulatoryBurdenThatHampe="Diversification and innovation gap"
        challengeOfClimateChange="Environmental challenges"
        propPadding="0rem 0rem var(--padding-3xl)"
        propPadding1="36px 106px 46px"
        propWidth="unset"
        propAlignSelf="stretch"
        propPadding2="0rem 0rem 0rem var(--padding-12xs)"
        propDisplay="unset"
        propMinWidth="unset"
        propMinHeight="unset"
        propDisplay1="unset"
        propMinWidth1="unset"
      />
      <FrameComponent />
      <Footer1 />
    </div>
  );
};

export default About;
