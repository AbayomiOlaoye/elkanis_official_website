/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../sections/jumbotron/top';
import '../sections/css/about.css';
import Article from '../sub/Article';
import ARTICLES from '../../storage/articles';
import PRODUCTS from '../../storage/product';
import '../../App.css';
import ProductCard from '../sub/ProductCard';
import Spacial from '../../assets/backgrounds/spatial.png';
import IV from '../../assets/products/ivr.svg';
import Drone from '../../assets/generic/drones.svg';
import IVR from '../../storage/ivr';
import Statistics from '../sub/statistics';
import agro from '../../assets/backgrounds/product_bg.png';
import supplements from '../../assets/products/supplements.jpg';
import Footer from '../Nav/Footer';
import styles from '../sections/css/products.module.scss';
import elkanisAgro from '../../assets/backgrounds/elkanis_agro.jpg';
import parboiled from '../../assets/generic/parboiled.webp';
import silicon from '../../assets/blogs/silicon.webp';
import fiems from '../../assets/products/fiems_hd.svg';
import handleOrder from '../sub/buy';

const Products = () => {
  const { id } = useParams();
  const location = useLocation();
  const sectionRef = useRef(null);

  const scrollToSection = (sectionElement) => {
    const scrollOffset = sectionElement.offsetTop - 50;
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        scrollToSection(sectionElement);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: true,
    });
  }, []);

  return (
    <div id="product-section" className={`sub--container flex column j-c-c a-i-c ${styles.background}`} style={{ backgroundColor: '#f9faf7', overflow: 'hidden' }} ref={sectionRef}>
      <Top
        title="Products"
        id="Products"
        img={agro}
        linkOne={{ link: 'Livestock Supplement', id: 'Livestock' }}
        linkTwo={{ link: 'Rice', id: 'Rice' }}
        linkThree={{ link: 'FIEMS', id: 'Fiems' }}
      />
      <div data-aos="zoom-in" className={`livestock about--content about--product w--100 page--content margin j-c-c a-i-c flex column ${styles.sectionOne}`}>
        <p className={`about--text w--80 text--just ${styles.paraText}`}>
          El-kanis and Partners&lsquo; products are of the highest quality, produced with a
          commitment to sustainability and innovation. By utilizing cutting-edge technology and
          sustainable practices, the company is able to produce food products that are both
          nutritious and environmentally friendly.
        </p>
        <hr className={styles.paraLine} />
        <div className={styles.bgLoader} />
        <Article article={ARTICLES[0]} img={supplements} id="Livestock" />
      </div>

      <article data-aos="fade-left" className={`products g--32 d-flex column w--100 ${styles.sectionTwo}`}>
        <img src={elkanisAgro} alt="El-kanis Agro logo" className={styles.agroImg} />
        <ProductCard products={PRODUCTS} />
      </article>

      <div data-aos="fade-in" className={`about--product w--100 rice ${styles.sectionThree}`}>
        <Article article={ARTICLES[2]} id="Rice" img={parboiled} />
      </div>

      <article
        className={`drive--us g--32 d-flex fiems ${styles.sectionFour}`}
        data-aos="fade-right"
      >
        <div className="rice--img--div w--100 d-flex a-i-c" id="Projects">
          <img src={silicon} alt={ARTICLES[1].id} className={styles.mobImg} />
          <img src={ARTICLES[1].productImage} alt={ARTICLES[1].id} className={`livestock--img ${styles.deskImg}`} />
        </div>
        <div className="cover">
          <div className="drive-us--text flex gap-one flow column">
            <h3 id="Fiems" className={`green-title-text boarder special-title temp--font light--green ${styles.title}`}>{ARTICLES[1].featureHeadline}</h3>
            <p className="sub--text text--just">{ARTICLES[1].intro[0]}</p>
          </div>
        </div>
      </article>

      <article
        id={id}
        data-aos="zoom-in"
        className={`drive--us row--reverse addImg relative a-i-c w--100 g--48 d-flex ${styles.sectionFive}`}
      >
        <div className={`rice--img--div w--100 d-flex ${styles.styleDiv}`}>
          <img src={fiems} alt="AKFIMS logo" className={styles.mobImgB} />
          <p className={`${styles.mobText} sub--text`}>{ARTICLES[1].intro[1]}</p>
          <img src={ARTICLES[1].addImg} alt="A man transporting rice" className={`rice--img smart--fiems ${styles.deskImg}`} />
        </div>

        <div className="cover">
          <div className="drive-us--text flex gap-one flow column">
            <p className={`${styles.deskText} sub--text`}>{ARTICLES[1].intro[1]}</p>
            <ul className="sub--text team--skills--list">
              {ARTICLES[1].result.map((para) => <li key={para}>{para}</li>)}
            </ul>
          </div>
        </div>
      </article>

      <section className="spacial--Img w--100">
        <img src={Spacial} alt="Geolocation conducted by drones" className={`spacial ${styles.spatialImg}`} />
      </section>
      <section className={`drones--section drive us w--100 d-flex column ${styles.droneSection}`}>
        <div className={`drones-div d-flex relative ${styles.droneDiv}`}>
          <img src={Drone} alt="Drones at work" className={`drone-drive relative ${styles.drone}`} />
          <div className={`drone--info ${styles.droneInfo}`}>
            <h4 className="product--card--title green-title temp--font">
              Agricultural Drone Service
            </h4>
            <p className="product--card--text">
              FIEMS leverage on Ag-drones to collect data and information that help farmers
              manage their enterprise more effectively. With FIEMS drones are deployed to count and
              monitor the growth of rice and assess land use. This data are used to make informed
              decisions about resource allocation and overall rice farm management.
            </p>
            {/* <Button text="Request Service" action={() => handleOrder('Drone Services')} /> */}
            <button
              type="button"
              title="Ask an Agent"
              className={`button w--100 action--btn ${styles.ivrRBtn}`}
              onClick={() => handleOrder('IVR Services')}
            >
              Request Service
            </button>
          </div>
        </div>
        <div className="drones-div IVR d-flex gap-one">
          <div className="drone--details d-flex column a-i-c w--100">
            <img src={IV} alt="IVR attendant icon" className="drone-drive-ivr" />
            <button
              type="button"
              title="Ask an Agent"
              className={`button action--btn ${styles.droneBtn}`}
              onClick={() => handleOrder('IVR Services')}
            >
              Request Service
            </button>
          </div>
          <div className="drone--info">
            <h4
              className="product--card--title green-title temp--font"
            >
              Local Language Interactive Response Platform
            </h4>
            <p className="product--card--text">
              The platform provide rural farmers with easy access to important information and
              resources using local language. The IVR allow rural farmers to interact with
              Extension Agents by navigating through a menu of options on their mobile phones
              to access the desired information. The platform is designed to provide rural
              farmers with information and services in a way that is accessible, convenient,
              and user-friendly.
            </p>
            <div className={`stats--container gap-one d-flex ${styles.statsContainer}`} style={{ marginTop: '2rem' }}>
              { IVR.map((ivr) => <Statistics stats={ivr.stats} key={ivr.id} />) }
              <button
                type="button"
                title="Ask an Agent"
                className={`button action--btn ${styles.ivrRBtn}`}
                onClick={() => handleOrder('IVR Services')}
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
