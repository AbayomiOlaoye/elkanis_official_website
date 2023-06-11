/* eslint-disable max-len */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../sections/jumbotron/top';
// import Pagination from '../Nav/pagination';
import '../sections/css/about.css';
import '../../index.css';
import agric from '../../assets/services/agric_bg.png';
import workers from '../../assets/services/workers-a.png';
import workersB from '../../assets/services/workers-b.png';
import riceStack from '../../assets/services/rice_stack.png';
import cultivation from '../../assets/services/cultivation.png';
import ricePro from '../../assets/services/rice_pro.png';
import Statistics from '../sub/statistics';
import ARTICLES from '../../storage/articles';
// import Footer from '../Nav/Footer';
// import research from '../../assets/services/research.png';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#fff' }}>
      <Top
        title="Our Services"
        id="Services"
        linkOne={{ link: 'Project Development', id: 'Projects' }}
        linkTwo={{ link: 'Rice Processing', id: 'Rice_Processing' }}
        linkThree={{ link: 'Research', id: 'Research' }}
      />

      <section className="about--content relative w--90 about--product page--content margin j-c-c a-i-c flex column" style={{ backgroundColor: '#fff' }}>
        <div className="agro--bg d-flex gap-one" data-aos="fade-down">
          <img
            src={agric}
            alt="agric"
            className="agro--img"
            style={
            {
              width: '130%',
              height: '50%',
              borderRadius: '300px 0 0 0',
              objectFit: 'cover',
            }
          }
          />
          <h4 id="Projects" className="agro--title boarder temp--font green-title-text">Agricultural Project Development and Management</h4>
        </div>
        <div className="agro--img--float d-flex absolute" data-aos="fade-up">
          <img src={workers} alt="agric" className="agro--float--img" />
          <img src={workersB} alt="agric" className="agro--float--img" />
          <img src={riceStack} alt="agric" className="agro--float--img" />
        </div>
        <ul className="project--list disc w--80">
          <li data-aos="fade-up">
            El-kanis and Partners conduct feasibility studies to assess the viability
            of the agricultural project and identify potential risks and challenges.
          </li>
          <li data-aos="fade-up">
            Developing project proposals, business plans, and project designs that
            outline the project objectives, budget, timeline, and expected outcomes.
          </li>
          <li>
            Development and implementation of agricultural management plans that include climate-smart
            crop and livestock production, post-harvest handling, marketing, and financial management.
          </li>
          <li data-aos="fade-up">
            Providing technical support and training to farmers and other stakeholders in areas such
            as crop production, livestock management, and financial management.
          </li>
          <li data-aos="fade-up">
            Establishing market linkages and value chain development to ensure the
            sustainability of the agricultural project beyond the project period.
          </li>
          <li data-aos="fade-up">
            Monitoring and evaluation of the project to track progress, identify challenges
            and make necessary adjustments.
          </li>
          <li data-aos="fade-up">
            Reporting and documentation of the project&lsquo;s progress,
            financial statements, and other documentation.
          </li>
          <li data-aos="fade-up">
            Developing and implementing sustainability strategies to ensure
            the long-term success of the project.
          </li>
        </ul>
        <article className="rice--processing relative w--80 d-flex">
          <div className="agro--bg relative d-flex row--reverse gap-one" data-aos="fade-right">
            <img
              src={cultivation}
              alt="agric"
              className="agro--img absolute"
              style={
            {
              right: '-120px',
              width: '40%',
              height: '90vh',
              borderRadius: '0 300px 0 0',
              objectFit: 'cover',
            }
          }
            />
            <div className="pro--title--div w--100 d-flex column">
              <h4 id="Rice_Processing" className="w--60 product--card--title boarder temp--font green-title-text">Rice Cultivation and Processing</h4>
              <p className="w--70 agro--text line--height">
                One of the key areas of expertise for El-kanis is rice production.
                Rice is a staple food for millions of people in Nigeria, and ensuring
                its quality and availability is crucial for national food security.
              </p>
              <p className="w--70 gro--text line--height">
                El-kanis and Partners uses state-of-the-art technology, including precision farming
                techniques and data-driven analytics, to enhance every step of the rice production
                process.From farmers profiling, farm mapping, seed selection and planting to
                irrigation and pest control, the company employs a range of innovative approaches
                such as drones monitoring and FIEMS to maximize yields and produce rice of the highest
                quality.
              </p>
            </div>

          </div>
          <div className="agro--bottom d-flex absolute gap-one" data-aos="fade-left">
            <img
              src={ricePro}
              alt="agric"
              className="agro--float--img"
              style={
            {
              borderRadius: '0 0 0 250px',
              objectFit: 'cover',
            }
          }
            />
            <div className="pro--title--div w--100 d-flex column">
              <p className="agro--text line--height">
                We operates a state-of-the-art rice processing mill that utilizes cutting-edge
                technology to produce high-quality rice products. The mill is located in Ikot
                Ekpene, 26km from Ini rice fields, allowing for efficient transportation and minimized
                processing time.
              </p>
              <p className="agro--text line--height">
                At the rice processing mill, El-kanis and Partners uses advanced milling techniques to
                remove the outer layers of the rice grain, while preserving its nutritional value and
                quality. The rice is cleaned, de-husked, and polished, before being sorted by size and
                quality.
              </p>
              <p className="agro--text line--height">
                In addition to traditional white rice, El-kanis and Partners also produces a variety
                specialty rice products, such as brown rice, ofada rice and parboiled rice.
                The company&lsquo;s focus on sustainability extends to the processing mill as well,
                with efforts made to reduce water usage, energy consumption, and waste production.
              </p>
            </div>
          </div>
        </article>
        <div className="stats--container gap-one d-flex relative" style={{ top: '95vh' }}>
          <Statistics stats={ARTICLES[2].stats} />
        </div>
        <article className="rice--processing relative d-flex g--32 column" style={{ top: '75vh' }} data-aos="zoom-in">
          <div className="cent d-flex column gap-one" style={{ marginLeft: '6rem' }}>
            <h4 id="Research" className="w--90 product--card--title boarder temp--font green-title-text">Agricultural Research for Development and Consultancy</h4>
            <p className="w--90 agro--text line--height">
              El-kanis and Partners is committed to improving the agricultural sector in Nigeria
              through its research and development efforts, as well as consultancy services.
            </p>
          </div>
          <div className="agro--bg relative d-flex gap-one">
            <img
              src={cultivation}
              data-aos="zoom-out"
              alt="agric"
              className="agro--img relative"
              style={
            {
              maxWidth: '100%',
              borderRadius: '200px 0 0 0',
              objectFit: 'cover',
            }
          }
            />
            <div className="pro--title--div w--80 d-flex column">
              <p className="agro--text line--height" style={{ marginTop: '0' }} data-aos="fade-left">
                Research for Development: El-kanis and Partners invests heavily in research and
                development to improve the productivity and sustainability of agricultural
                practices in Nigeria. The company collaborates with universities, research
                institutions, and local farmers to identify and develop innovative solutions
                that can be applied in the Nigerian context. For example, El-kanis and Partners
                has developed supplements for livestock that are better suited to local brooding
                conditions, which has helped to increase yields and reduce mortality.
              </p>
              <p className="agro--text line--height" data-aos="fade-right">
                Consultancy Services: El-kanis and Partners provides consultancy services to
                Governments, Development Agencies and farmers, helping them to improve their
                agricultural practices and increase their yields. The company&lsquo;s team of experts
                provides advice on issues such as soil management, irrigation, and pest control,
                helping farmers to optimize their resources and improve their overall profitability.
                El-kanis and Partners also provides training to farmers on best practices in food
                safety and quality management, which is essential for accessing export markets.
              </p>
            </div>

          </div>
        </article>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Services;
