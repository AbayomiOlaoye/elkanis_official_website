import React from 'react';
import Top from '../sections/aboutUs/top';
import riceTrans from '../../assets/generic/rice_trans.png';
import Team from '../../storage/team';
import Member from '../sub/member';

const About = () => {
  const handleClick = () => {
    console.log('clicked');
  };
  handleClick();
  return (
    <div className="sub--container">
      <Top title="About Us" />
      <div className="about--content margin">
        <p className="about--text">
          El-kanis and Partners is a leading food production company that
          is changing the game in the agriculture sector in Nigeria by
          leveraging cutting-edge technology to produce high-quality
          rice and livestock supplements.
        </p>
        <article className="drive-us d-flex">
          <div className="drive-us--text flex column">
            <h3 className="sub--theme temp--font light--green">What Drives Us</h3>
            <p className="sub--text">
              With a mission to provide sustainable and nutritious food options
              to consumers, El-kanis and Partners has established itself as a pioneer
              in the field, utilizing Farmers Management Information System (FIEMS)
              to optimize food production while minimizing environmental impact.
            </p>
            <p className="sub--text">
              El-kanis and Partners&lsquo; commitment to technology-driven food production
              has earned them a reputation as a leader in the agriculture sector.
              By combining innovative techniques with a focus on sustainability, the company
              is revolutionizing the way food is produced, ensuring that consumers have
              access to high-quality and nutritious rice and livestock supplements while
              minimizing the impact on the environment.
            </p>
          </div>
          <img src={riceTrans} alt="A man transporting rice" className="rice--img" />
        </article>
      </div>
      <article className="vision">
        <div className="vision--div">
          <div className="vision--title--div">
            <img src="" alt="vision" className="vision--img icon" />
            <h3 className="sub--theme temp--font light--green">Our Vision</h3>
          </div>
          <p className="sub--text">
            To provide high-quality rice and livestock supplement products that are nutritious,
            safe, and sustainably produced, meeting the evolving needs of consumers and
            contributing to the well-being of our planet.
            We envision a future where our innovative solutions and commitment to sustainability
            inspire positive change in the agriculture industry, creating a more sustainable,
            healthy, and prosperous future for generations to come.
          </p>
        </div>
        <div className="vision--div">
          <div className="vision--title--div">
            <img src="" alt="vision" className="vision--img icon" />
            <h3 className="sub--theme temp--font light--green">Our Mission</h3>
          </div>
          <p className="sub--text">
            To revolutionize food production through the use of technology, while prioritizing
            sustainability and promoting healthy and nutritious food options.
            We strive to provide high-quality rice and livestock supplements to consumers in
            Nigeria, utilizing innovative techniques and data-driven approaches to optimize
            production and minimize environmental impact.
          </p>
        </div>
      </article>
      <article className="drive-us d-flex">
        <img src={riceTrans} alt="A man transporting rice" className="rice--img" />
        <div className="drive-us--text flex column">
          <h3 className="sub--theme temp--font light--green">Technology Integration</h3>
          <p className="sub--text">
            El-kanis and Partners&lsquo; use of technology extends beyond production processes.
            The company also employs advanced logistics and supply chain management systems to
            streamline distribution and reduce waste.
          </p>
          <p className="sub--text">
            By utilizing data-driven approaches to monitor inventory levels, demand patterns,
            and transportation routes, the company is able to minimize food loss and optimize
            the delivery of its products to customers in a timely and efficient manner.
          </p>
        </div>
      </article>
      <article className="drive-us d-flex column">
        <div className="team-top">
          <img src="" alt="vision" className="vision--img icon" />
          <h3 className="sub--theme temp--font light--green">Meet the Team</h3>
        </div>
        <div className="team--div grid">
          {Team.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default About;
