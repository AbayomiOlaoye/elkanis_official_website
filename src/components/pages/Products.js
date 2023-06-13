/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Top from '../sections/jumbotron/top';
import '../sections/css/about.css';
import Article from '../sub/Article';
import ARTICLES from '../../storage/articles';
import PRODUCTS from '../../storage/product';
import '../../App.css';
import ProductCard from '../sub/ProductCard';
import Spacial from '../../assets/generic/spatial_img.svg';
import IV from '../../assets/products/ivr.svg';
import Drone from '../../assets/generic/drones.svg';
import IVR from '../../storage/ivr';
import Statistics from '../sub/statistics';
import Footer from '../Nav/Footer';
// import styles from '../sections/css/Products.module.css';

const Products = () => {
  const { id } = useParams();
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const elem = document.getElementById(location.state.scrollToSection);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [location.state]);

  // Whatsapp message
  const PHONE_NUMBER = '2348027331036';

  const handleOrder = (name) => {
    const message = `Hello, I would like to place an order for ${name}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7' }} ref={sectionRef}>
      <Top
        title="Our Products"
        id="Products"
        linkOne={{ link: 'Livestock Supplement', id: 'Livestock' }}
        linkTwo={{ link: 'Rice', id: 'Rice' }}
        linkThree={{ link: 'FIEMS', id: 'Fiems' }}
      />

      <div className="about--content about--product w--100 page--content margin j-c-c a-i-c flex column">
        <p className="about--text w--80 text--just">
          El-kanis and Partners&lsquo; products are of the highest quality, produced with a
          commitment to sustainability and innovation. By utilizing cutting-edge technology and
          sustainable practices, the company is able to produce food products that are both
          nutritious and environmentally friendly.
        </p>
        <Article article={ARTICLES[0]} id="Livestock" />
      </div>

      <article className="drive-us g--32 d-flex column w--70" style={{ marginTop: '5vh' }}>
        <ProductCard products={PRODUCTS} />
      </article>

      <div className="about--product w--100">
        <Article article={ARTICLES[2]} id="Rice" />
      </div>

      <article
        className="drive--us g--32 d-flex"
        style={
          {
            padding: '0',
            alignSelf: 'flex-start',
            width: '90%',
            marginTop: '2rem',
          }
  }
      >
        <div className="rice--img--div w--100 d-flex a-i-c" id="Projects">
          <img src={ARTICLES[1].productImage} alt={ARTICLES[1].id} className="livestock--img" style={{ maxWidth: '100%' }} />
        </div>
        <div className="cover">
          <div className="drive-us--text flex gap-one flow column">
            <h3 id="Fiems" className="green-title-text boarder special-title temp--font light--green">{ARTICLES[1].featureHeadline}</h3>
            <p className="sub--text text--just">{ARTICLES[1].intro[0]}</p>
          </div>
        </div>
      </article>

      <article
        id={id}
        className="drive--us row--reverse relative a-i-c w--100 g--48 d-flex"
      >
        <div className="rice--img--div w--100 d-flex">
          <img src={ARTICLES[1].addImg} alt="A man transporting rice" className="rice--img smart--fiems" />
        </div>

        <div className="cover">
          <div className="drive-us--text flex gap-one flow column">
            <p className="sub--text text--just">{ARTICLES[1].intro[0]}</p>
            <ul className="sub--text text--just team--skills--list">
              {ARTICLES[1].result.map((para) => <li key={para}>{para}</li>)}
            </ul>
          </div>
        </div>
      </article>

      <section className="spacial--Img w--80">
        <img src={Spacial} alt="Geolocation conducted by drones" className="spacial" style={{ width: '100%' }} />
      </section>
      <section className="drones--section drive us w--100 d-flex column">
        <div className="drones-div d-flex relative">
          <img src={Drone} alt="Drones at work" className="drone-drive relative" />
          <div className="drone--info">
            <h4 className="product--card--title green-title temp--font">
              Agricultural Drone Service
            </h4>
            <p className="product--card--text text--just">
              FIEMS leverage on Ag-drones to collect data and information that help farmers
              manage their enterprise more effectively. With FIEMS drones are deployed to count and
              monitor the growth of rice and assess land use. This data are used to make informed
              decisions about resource allocation and overall rice farm management.
            </p>
          </div>
        </div>
        <div className="drones-div IVR d-flex g--32">
          <div className="drone--details d-flex column a-i-c" style={{ width: '100%' }}>
            <img src={IV} alt="IVR attendant icon" className="drone-drive-ivr" />
            <button
              type="button"
              title="Ask an Agent"
              className="button action--btn"
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
            <p className="product--card--text text--just">
              The platform provide rural farmers with easy access to important information and
              resources using local language. The IVR allow rural farmers to interact with
              Extension Agents by navigating through a menu of options on their mobile phones
              to access the desired information. The platform is designed to provide rural
              farmers with information and services in a way that is accessible, convenient,
              and user-friendly.
            </p>
            <div className="stats--container gap-one d-flex" style={{ marginTop: '2rem' }}>
              { IVR.map((ivr) => <Statistics stats={ivr.stats} key={ivr.id} />) }
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
