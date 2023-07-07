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
import workersB from '../../assets/backgrounds/blog_bg.png';
import riceStack from '../../assets/services/rice_stack.png';
import cultivation from '../../assets/services/cultivation.png';
import ricePro from '../../assets/services/rice_pro.png';
import Statistics from '../sub/statistics';
import ARTICLES from '../../storage/articles';
import Footer from '../Nav/Footer';
import research from '../../assets/services/research.png';
import precision from '../../assets/projects/ditra.png';
import styles from '../sections/css/services.module.scss';
import Button from '../sub/button';
import handleOrder from '../sub/buy';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div id="service-section" className="sub--container flex column j-c-c a-i-c" style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
      <Top
        title="Services"
        img={precision}
        id="Services"
        linkOne={{ link: 'Project Development', id: 'Projects' }}
        linkTwo={{ link: 'Rice Processing', id: 'Rice_Processing' }}
        linkThree={{ link: 'Research', id: 'Research' }}
      />

      <section className={`services about--content relative w--100 about--product page--content margin j-c-c a-i-c flex column ${styles.servicesSection}`} style={{ backgroundColor: '#fff' }}>
        <div className="agro--bg d-flex gap-one" data-aos="fade-down">
          <img
            src={agric}
            alt="agric"
            className={`main--agro--img ${styles.agroImg}`}
          />
          <h4 id="Projects" className={`agro--title boarder temp--font green-title-text ${styles.title}`}>Agricultural Project Development and Management</h4>
        </div>
        <div className={`w--100 relative ${styles.reverseDiv}`}>
          <Button text="Request Service" action={() => handleOrder('Agricultural Project and Development Services')} />
          <div className={`agro--img--float a-i-c j-c-c d-flex relative ${styles.imgDiv}`} data-aos="fade-up">
            <img src={workers} alt="agric" className={`agro--float--img ${styles.imgA}`} />
            <img src={workersB} alt="agric" className={`agro--float--img ${styles.imgB}`} />
            <img src={riceStack} alt="agric" className={`agro--float--img ${styles.imgC}`} />
          </div>
          <ul className={`project--list d-flex j-c-c a-i-c w--70 column disc ${styles.listDiv}`}>
            <li data-aos="fade-up">
              El-kanis and Partners conduct feasibility studies to assess the viability
              of the agricultural project and identify potential risks and challenges.
            </li>
            <li data-aos="fade-up">
              Developing project proposals, business plans, and project designs that
              outline the project objectives, budget, timeline, and expected outcomes.
            </li>
            <li data-aos="fade-up">
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
        </div>
        <article className={`cultivate rice--processing relative w--90 d-flex column ${styles.sectionCultivation}`}>
          <div className={`pro agro--bg max relative d-flex row--reverse gap-one ${styles.contDiv}`} data-aos="fade-right">
            <img
              src={cultivation}
              alt="agric"
              className={`plant agro--img absolute ${styles.deskImg}`}
            />
            <div className={`pro--title--div w--80 d-flex grow column ${styles.flexDiv}`}>
              <h4 id="Rice_Processing" className={`product--card--title boarder temp--font green-title-text ${styles.title}`}>Rice Cultivation and Processing</h4>
              <div className={styles.groupImg}>
                <img
                  src={ricePro}
                  alt="agric"
                  className={styles.img}
                />
                <img
                  src={cultivation}
                  alt="agric"
                  className={styles.img}
                />
              </div>
              <p className="agro--text line--height" data-aos="fade-up">
                One of the key areas of expertise for El-kanis is rice production.
                Rice is a staple food for millions of people in Nigeria, and ensuring
                its quality and availability is crucial for national food security.
              </p>
              <p className="agro--text space--para line--height" data-aos="fade-up">
                El-kanis and Partners uses state-of-the-art technology, including precision farming
                techniques and data-driven analytics, to enhance every step of the rice production
                process.From farmers profiling, farm mapping, seed selection and planting to
                irrigation and pest control, the company employs a range of innovative approaches
                such as drones monitoring and FIEMS to maximize yields and produce rice of the highest
                quality.
              </p>
            </div>
            <Button text="Request Service" action={() => handleOrder('Rice Cultivation')} />
          </div>
          <div className={`pro stats--container gap-half j-c-c d-flex relative ${styles.statsContainer}`}>
            <Statistics stats={ARTICLES[2].stats} />
          </div>
          <div className={`agro--bottom w--80 d-flex gap-one ${styles.operationDiv}`} data-aos="fade-left">
            <img
              src={ricePro}
              alt="agric"
              className={`remove bottom agro--float--img ${styles.deskImg}`}
              style={
            {
              borderRadius: '0 0 0 120px',
              objectFit: 'cover',
            }
          }
            />
            <div className={`pro--title--div w--100 d-flex column ${styles.paraDiv}`}>
              <p className="agro--text line--height" data-aos="fade-up">
                We operates a state-of-the-art rice processing mill that utilizes cutting-edge
                technology to produce high-quality rice products. The mill is located in Ikot
                Ekpene, 26km from Ini rice fields, allowing for efficient transportation and minimized
                processing time.
              </p>
              <p className="agro--text line--height" data-aos="fade-up">
                At the rice processing mill, El-kanis and Partners uses advanced milling techniques to
                remove the outer layers of the rice grain, while preserving its nutritional value and
                quality. The rice is cleaned, de-husked, and polished, before being sorted by size and
                quality.
              </p>
              <p className="agro--text line--height" data-aos="fade-up">
                In addition to traditional white rice, El-kanis and Partners also produces a variety
                specialty rice products, such as brown rice, ofada rice and parboiled rice.
                The company&lsquo;s focus on sustainability extends to the processing mill as well,
                with efforts made to reduce water usage, energy consumption, and waste production.
              </p>
            </div>
          </div>
        </article>
        <div className={`pro stats--container gap-half j-c-c d-flex relative ${styles.deskImg}`}>
          <Statistics stats={ARTICLES[2].stats} />
        </div>
        <article className={`w--80 research rice--processing relative d-flex g--32 a-i-c column ${styles.researchDiv}`} data-aos="zoom-in">
          <div className="cent d-flex a-i-c column gap-one">
            <h4 id="Research" className={`w--90 product--card--title boarder temp--font green-title-text ${styles.title}`}>Agricultural Research for Development and Consultancy</h4>
          </div>
          <div className={`pro agro--bg relative d-flex gap-one ${styles.adjServices}`}>
            <div className={`research--overlay ${styles.intro}`}>
              <img
                src={research}
                data-aos="zoom-out"
                alt="agric"
                className={`researching agro--img ${styles.researchImg}`}
              />
            </div>
            <div className={`pro--title--div w--90 d-flex column ${styles.intoT}`}>
              <p data-aos="fade-up" className="agro--text line--height" style={{ marginTop: '0' }}>
                <b>Research for Development:</b>
                {' '}
                El-kanis and Partners invests heavily in research and
                development to improve the productivity and sustainability of agricultural
                practices in Nigeria. The company collaborates with universities, research
                institutions, and local farmers to identify and develop innovative solutions
                that can be applied in the Nigerian context. For example, El-kanis and Partners
                has developed supplements for livestock that are better suited to local brooding
                conditions, which has helped to increase yields and reduce mortality.
              </p>
              <p className="agro--text line--height" data-aos="fade-up">
                <b>Consultancy Services:</b>
                {' '}
                El-kanis and Partners provides consultancy services to
                Governments, Development Agencies and farmers, helping them to improve their
                agricultural practices and increase their yields. The company&lsquo;s team of experts
                provides advice on issues such as soil management, irrigation, and pest control,
                helping farmers to optimize their resources and improve their overall profitability.
                El-kanis and Partners also provides training to farmers on best practices in food
                safety and quality management, which is essential for accessing export markets.
              </p>
            </div>

          </div>
          <Button text="Request Service" action={() => handleOrder('Research & Consulting services')} />
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
