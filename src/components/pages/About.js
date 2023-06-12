/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../sections/jumbotron/top';
import riceTrans from '../../assets/generic/rice_transport.svg';
import Team from '../../storage/team';
import Member from '../sub/member';
import '../sections/css/about.css';
import vision from '../../assets/icons/vision.svg';
import mission from '../../assets/icons/mission.svg';
import meet from '../../assets/icons/people_icon.svg';
import Footer from '../Nav/Footer';

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in',
      once: false,
    });
  }, []);

  return (
    <div className="sub--container about--bg flex column j-c-c a-i-c">
      <Top title="About Us" id="AboutUs" />
      <div className="about--content page--content margin j-c-c a-i-c flex column" data-aos="fade-left" style={{ overflow: 'hidden' }}>
        <p className="about--text boarder w--80 text--just">
          El-kanis and Partners is a leading food production company that
          is changing the game in the agriculture sector in Nigeria by
          leveraging cutting-edge technology to produce high-quality
          rice and livestock supplements.
        </p>
        <article className="drive-us push--left g--32 grid a-i-c w--80" data-aos="fade-right" style={{ overflow: 'hidden' }}>
          <div className="drive-us--div flex flow column" data-aos="fade-up">
            <h3 className="green-title-text special-title temp--font light--green">What Drives Us</h3>
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
          <div className="rice--img--diva w--100 d-flex a-i-c" data-aos="fade-up">
            <img src={riceTrans} alt="A man transporting rice" className="rice--img" data-aos="fade-up" />
          </div>
        </article>
      </div>
      <article className="vision--container relative grid">
        <div className="vision--div d-flex gap-one column a-i-c">
          <div className="vision--title--div gap-one d-flex column a-i-c" data-aos="fade-up">
            <img src={vision} alt="vision" className="vision--img icon d-block" data-aos="fade-up" />
            <h3 className="mini-title green-title-text temp--font light--green" data-aos="fade-up">Our Vision</h3>
          </div>
          <p className="sub--text text--just" data-aos="fade-up">
            To provide high quality rice and livestock supplement products that are nutritious,
            safe, and sustainably produced, meeting the evolving needs of consumers and
            contributing to the well-being of our planet.
            We envision a future where our innovative solutions and commitment to sustainability
            inspire positive change in the agriculture industry, creating a more sustainable,
            healthy, and prosperous future for generations to come.
          </p>
        </div>
        <div className="boarder vision--div d-flex gap-one column a-i-c">
          <div className="vision--title--div d-flex gap-one d-flex column a-i-c">
            <img src={mission} alt="vision" data-aos="fade-up" className="vision--img icon" />
            <h3 className="mini-title green-title-text temp--font light--green" data-aos="fade-up">Our Mission</h3>
          </div>
          <p className="sub--text text--just" data-aos="fade-up">
            To revolutionize food production through the use of technology, while prioritizing
            sustainability and promoting healthy and nutritious food options.
            We strive to provide high-quality rice and livestock supplements to consumers in
            Nigeria, utilizing innovative techniques and data-driven approaches to optimize
            production and minimize environmental impact.
          </p>
        </div>
      </article>
      <article className="drive-us tech--section gap-one grid w--80" style={{ marginTop: '5vh' }} data-aos="fade-up">
        <div className="rice--img--div w--100 d-flex a-i-c">
          <img src={riceTrans} alt="A man transporting rice" data-aos="fade-up" className="rice--img" />
          <div className="span--overlay w--100" />
        </div>
        <div className="drive-us--text flex j-c-c flow column" data-aos="fade-down">
          <h3 className="lefty--title boarder green-title-text special-title temp--font light--green">Technology Integration</h3>
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
      <article className="drive-us d-flex column w--80" data-aos="fade-up">
        <div className="team-top d-flex column a-i-c gap-one">
          <img src={meet} alt="vision" className="vision--img icon" data-aos="zoom-out" />
          <h3 data-aos="zoom-in" className="meet--up green-title-text temp--font light--green">Meet the Team</h3>
        </div>
        <div className="team--div grid a-i-c">
          {showAll ? (
            <ul>
              {Team.map((member, index) => (
                <li key={member.id}><Member key={member.id} counter={index} member={member} /></li>
              ))}
            </ul>
          ) : (
            <ul>
              {Team.slice(0, 3).map((member, index) => (
                <li key={member.id}><Member key={member.id} counter={index} member={member} /></li>
              ))}
            </ul>
          )}
          <button type="button" data-aos="fade-in" data-aos-once="false" data-aos-duration="4000" className="btn--more" onClick={toggleShowAll}>{!showAll ? 'Show more' : 'Show less'}</button>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default About;
