/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Top from '../sections/jumbotron/top';
import Team from '../../storage/team';
import Member from '../sub/member';
import '../sections/css/about.css';
import styles from '../sections/css/about.module.scss';
import vision from '../../assets/icons/vision.svg';
import mission from '../../assets/icons/mission.svg';
import meet from '../../assets/icons/people_icon.svg';
import Footer from '../Nav/Footer';
import about from '../../assets/backgrounds/about_us.jpg';
import bg from '../../assets/backgrounds/supplies.webp';
import techBg from '../../assets/projects/precision.webp';

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedMembers, setDisplayedMembers] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setDisplayedMembers(Team);
    } else {
      const slicedMembers = Team.slice(0, 4);
      setDisplayedMembers(slicedMembers);
    }
  };

  useEffect(() => {
    if (showAll) {
      setDisplayedMembers(Team);
    }
  }, [showAll]);

  useEffect(() => {
    const updateMembers = () => {
      const isSmallScreen = window.innerWidth <= 768;
      const isMediumScreen = window.innerWidth <= 960;
      const isLargeScreen = window.innerWidth > 960;
      setIsLargeScreen(isLargeScreen);
      let slicedMembers;
      if (isSmallScreen) {
        slicedMembers = isSmallScreen ? Team.slice(0, 3) : Team.slice(0, 4);
      } else if (isMediumScreen) {
        slicedMembers = isMediumScreen ? Team.slice(0, 4) : Team.slice(0, 5);
      } else {
        slicedMembers = Team;
      }
      setDisplayedMembers(slicedMembers);
    };

    updateMembers();

    window.addEventListener('resize', updateMembers);

    return () => {
      window.removeEventListener('resize', updateMembers);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'linear',
      once: true,
    });
  }, []);

  return (
    <div id="about-us" className="sub--container about--bg flex column j-c-c a-i-c" style={{ overflow: 'hidden' }}>
      <Top title="About Us" id="AboutUs" img={about} />
      <div id="about--page" className={`about--content page--content margin j-c-c a-i-c flex column ${styles.abtDiv}`} data-aos="fade-left" style={{ overflow: 'hidden' }}>
        <p className={`about--text w--80 ${styles.abtPara}`}>
          El-kanis and Partners is a leading food production company that
          is changing the game in the agriculture sector in Nigeria by
          leveraging cutting-edge technology to produce high-quality
          rice and livestock supplements.
        </p>
        <hr className={styles.paraLine} />
        <article className={`drive-us push--left g--32 grid a-i-c w--80 ${styles.flipDiv}`} data-aos="fade-right" style={{ overflow: 'hidden' }}>
          <div className="drive-us--div relative flex flow column">
            <h3 className={`green-title-text special-title temp--font light--green ${styles.driveTitle}`} data-aos="fade-left">What Drives Us</h3>
            <p className="sub--text para-one text--just">
              With a mission to provide sustainable and nutritious food options
              to consumers, El-kanis and Partners has established itself as a pioneer
              in the field, utilizing Farmers Management Information System (FIEMS)
              to optimize food production while minimizing environmental impact.
            </p>
            <p className="sub--text text--just" data-aos="fade-up">
              El-kanis and Partners&lsquo; commitment to technology-driven food production
              has earned them a reputation as a leader in the agriculture sector.
              By combining innovative techniques with a focus on sustainability, the company
              is revolutionizing the way food is produced, ensuring that consumers have
              access to high-quality and nutritious rice and livestock supplements while
              minimizing the impact on the environment.
            </p>
          </div>
          <div className={`rice--img--div w--100 d-flex ${styles.revealImg}`} data-aos="fade-up">
            <img src={bg} alt="A man transporting rice" data-aos="fade-right" className={`rice--img ${styles.riceImg}`} />
          </div>
        </article>
      </div>
      <article className="vision--container relative g--32 grid">
        <div className="vision--div d-flex gap-one column a-i-c" data-aos="fade-up">
          <div className="vision--title--div gap-one d-flex column a-i-c">
            <img src={vision} alt="vision" className="vision--img icon d-block" />
            <h3 className="mini-title green-title-text temp--font light--green">Our Vision</h3>
          </div>
          <p className="sub--text light text--just">
            To provide high quality rice and livestock supplement products that are nutritious,
            safe, and sustainably produced, meeting the evolving needs of consumers and
            contributing to the well-being of our planet.
            We envision a future where our innovative solutions and commitment to sustainability
            inspire positive change in the agriculture industry, creating a more sustainable,
            healthy, and prosperous future for generations to come.
          </p>
        </div>
        <div className="boarder vision--div d-flex gap-one column a-i-c" data-aos="fade-up">
          <div className="vision--title--div d-flex gap-one d-flex column">
            <img src={mission} alt="vision" className="vision--img icon" />
            <h3 className="mini-title green-title-text temp--font light--green">Our Mission</h3>
          </div>
          <p className="sub--text light text--just">
            To revolutionize food production through the use of technology, while prioritizing
            sustainability and promoting healthy and nutritious food options.
            We strive to provide high-quality rice and livestock supplements to consumers in
            Nigeria, utilizing innovative techniques and data-driven approaches to optimize
            production and minimize environmental impact.
          </p>
        </div>
      </article>
      <article className={`drive-us tech--section gap-one grid w--100 ${styles.flipDivB}`} style={{ marginTop: '5vh' }} data-aos="fade-up">
        <div className={`rice--img--div w--100 d-flex ${styles.revealImg}`}>
          <img src={techBg} alt="A man transporting rice" className={`rice--img ${styles.riceImgB}`} />
          <div className="span--overlay w--100" />
        </div>
        <div className="drive-us--text relative flex j-c-c flow column" data-aos="fade-dup">
          <h3 className={` boarder green-title-text special-title temp--font light--green ${styles.driveTitleB}`}>Technology Integration</h3>
          <p className="sub--text para-one text--just">
            El-kanis and Partners&lsquo; use of technology extends beyond production processes.
            The company also employs advanced logistics and supply chain management systems to
            streamline distribution and reduce waste.
          </p>
          <p className="sub--text text--just" data-aos="fade-up">
            By utilizing data-driven approaches to monitor inventory levels, demand patterns,
            and transportation routes, the company is able to minimize food loss and optimize
            the delivery of its products to customers in a timely and efficient manner.
          </p>
        </div>
      </article>
      <article className={`drive-us about--bg relative d-flex column w--100 ${styles.bgContainer}`} data-aos="fade-up" style={{ width: '100%' }}>
        <img src={about} alt="Team meeting" className="mobile teamImg" />
        <div className={`${styles.teamTop} d-flex column a-i-c gap-one`}>
          <img src={meet} alt="vision" className={`vision--img relative icon ${styles.meetImg}`} data-aos="zoom-out" data-aos-duration="300" />
          <h3 data-aos="zoom-in" className="styleHeader meet--up green-title-text temp--font light--green">Meet the Team</h3>
        </div>
        <div className="team--div grid a-i-c">
          {showAll ? (
            <ul className="team--container grid a-i-c j-c-c">
              {displayedMembers.map((member, index) => (
                <li key={member.id}><Member key={member.id} counter={index} member={member} /></li>
              ))}
            </ul>
          ) : (
            <ul className="team--container grid">
              {displayedMembers.map((member, index) => (
                <li key={member.id}><Member key={member.id} counter={index} member={member} /></li>
              ))}
            </ul>
          )}
          {!isLargeScreen && <button type="button" data-aos="fade-in" data-aos-once="false" data-aos-duration="100" className="btn--more" onClick={toggleShowAll}>{!showAll ? 'Show more' : 'Show less'}</button>}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default About;
