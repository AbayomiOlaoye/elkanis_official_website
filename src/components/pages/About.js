import React from 'react';
import Top from '../sections/jumbotron/top';
import riceTrans from '../../assets/generic/rice_transport.svg';
import Team from '../../storage/team';
import Member from '../sub/member';
import '../sections/css/about.css';
import Pagination from '../Nav/pagination';
import vision from '../../assets/icons/vision.svg';
import mission from '../../assets/icons/mission.svg';
import meet from '../../assets/icons/people_icon.svg';

const About = () => (
  <div className="sub--container about--bg flex column j-c-c a-i-c">
    <Top title="About Us" id="AboutUs" />
    <div className="about--content page--content margin j-c-c a-i-c flex column">
      <p className="about--text boarder w--80 text--just">
        El-kanis and Partners is a leading food production company that
        is changing the game in the agriculture sector in Nigeria by
        leveraging cutting-edge technology to produce high-quality
        rice and livestock supplements.
      </p>
      <article className="drive-us push--left g--32 grid a-i-c w--80">
        <div className="drive-us--text flex flow column">
          <h3 style={{ fontSize: '68px' }} className="green-title-text special-title temp--font light--green">What Drives Us</h3>
          <p className="sub--text para-one text--just">
            With a mission to provide sustainable and nutritious food options
            to consumers, El-kanis and Partners has established itself as a pioneer
            in the field, utilizing Farmers Management Information System (FIEMS)
            to optimize food production while minimizing environmental impact.
          </p>
          <p className="sub--text text--just">
            El-kanis and Partners&lsquo; commitment to technology-driven food production
            has earned them a reputation as a leader in the agriculture sector.
            By combining innovative techniques with a focus on sustainability, the company
            is revolutionizing the way food is produced, ensuring that consumers have
            access to high-quality and nutritious rice and livestock supplements while
            minimizing the impact on the environment.
          </p>
        </div>
        <div className="rice--img--diva w--100 d-flex a-i-c">
          <img src={riceTrans} alt="A man transporting rice" className="rice--img" />
        </div>
      </article>
    </div>
    <article className="vision--container relative w--80 grid">
      <div className="vision--div d-flex g--32 column a-i-c">
        <div className="vision--title--div gap-one d-flex column a-i-c">
          <img src={vision} alt="vision" className="vision--img icon d-block" />
          <h3 className="mini-title green-title-text temp--font light--green">Our Vision</h3>
        </div>
        <p className="sub--text text--just">
          To provide high quality rice and livestock supplement products that are nutritious,
          safe, and sustainably produced, meeting the evolving needs of consumers and
          contributing to the well-being of our planet.
          We envision a future where our innovative solutions and commitment to sustainability
          inspire positive change in the agriculture industry, creating a more sustainable,
          healthy, and prosperous future for generations to come.
        </p>
      </div>
      <div className="boarder vision--div d-flex g--32 column a-i-c">
        <div className="vision--title--div d-flex gap-one d-flex column a-i-c">
          <img src={mission} alt="vision" className="vision--img icon" />
          <h3 className="mini-title green-title-text temp--font light--green">Our Mission</h3>
        </div>
        <p className="sub--text text--just">
          To revolutionize food production through the use of technology, while prioritizing
          sustainability and promoting healthy and nutritious food options.
          We strive to provide high-quality rice and livestock supplements to consumers in
          Nigeria, utilizing innovative techniques and data-driven approaches to optimize
          production and minimize environmental impact.
        </p>
      </div>
    </article>
    <article className="drive-us tech--section g--32 grid w--80" style={{ marginTop: '5vh' }}>
      <div className="rice--img--div w--100 d-flex a-i-c">
        <img src={riceTrans} alt="A man transporting rice" className="rice--img" />
        <div className="span--overlay w--100" />
      </div>
      <div className="drive-us--text flex j-c-c flow column">
        <h3 style={{ fontSize: '68px' }} className=" boarder green-title-text special-title temp--font light--green">Technology Integration</h3>
        <p className="sub--text para-one text--just">
          El-kanis and Partners&lsquo; use of technology extends beyond production processes.
          The company also employs advanced logistics and supply chain management systems to
          streamline distribution and reduce waste.
        </p>
        <p className="sub--text text--just">
          By utilizing data-driven approaches to monitor inventory levels, demand patterns,
          and transportation routes, the company is able to minimize food loss and optimize
          the delivery of its products to customers in a timely and efficient manner.
        </p>
      </div>
    </article>
    <article className="drive-us d-flex column w--80">
      <div className="team-top d-flex column a-i-c gap-one">
        <img src={meet} alt="vision" className="vision--img icon" />
        <h3 style={{ fontSize: '60px' }} className="m-40 green-title-text temp--font light--green">Meet the Team</h3>
      </div>
      <div className="team--div grid a-i-c">
        {Team.map((member) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </article>
    <Pagination id="AboutUs" />
  </div>
);

export default About;
