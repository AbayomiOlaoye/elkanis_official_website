/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import Button from './button';
import '../../index.css';
import styles from '../sections/css/products.module.scss';

const ProductCard = ({ products }) => {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const updateMembers = () => {
      const isSmallScreen = window.innerWidth <= 768;
      if (isSmallScreen) {
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
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
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const [productState, setProductState] = useState(
    products.map((product) => ({
      ...product,
      showBenefit: true,
      showHowItWorks: false,
      showDosage: false,
    })),
  );

  const handleShowBenefit = (productIndex) => {
    setProductState((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[productIndex].showBenefit = true;
      updatedProducts[productIndex].showHowItWorks = false;
      updatedProducts[productIndex].showDosage = false;
      return updatedProducts;
    });
  };

  const handleShowHowItWorks = (productIndex) => {
    setProductState((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[productIndex].showBenefit = false;
      updatedProducts[productIndex].showHowItWorks = true;
      updatedProducts[productIndex].showDosage = false;
      return updatedProducts;
    });
  };

  const handleShowDosage = (productIndex) => {
    setProductState((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[productIndex].showBenefit = false;
      updatedProducts[productIndex].showHowItWorks = false;
      updatedProducts[productIndex].showDosage = true;
      return updatedProducts;
    });
  };

  const renderBenefits = (product) => product.map((benefit) => <li key={benefit} className="lister--item">{benefit}</li>);

  const renderHow = (product) => product.map((benefit) => <li key={benefit} className="lister--item">{benefit}</li>);

  const renderDosage = (product) => product.map((benefit) => <li key={benefit} className="lister--item">{benefit}</li>);

  // Whatsapp message
  const PHONE_NUMBER = '2348027331036';

  const handleOrder = (name) => {
    const message = `Hello, I would like to ask about your ${name}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const [isShowDetails, setIsShowDetails] = useState({});

  const showDetails = (productId) => {
    setIsShowDetails((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <>
      {productState.map((product, index) => (
        <div className="product--card--div d-flex g--32" key={product.id} style={{ lineHeight: '25px' }}>
          <div className={`product--img--div d-flex column ${styles.deskDiv}`}>
            <img src={product.productImage} alt={product.product} className="product--card--img" />
            <Button text="Place Order" action={() => handleOrder(product.id)} />
          </div>
          <div className="product--card--text--div">

            <div className={styles.introDiv}>
              <div className={styles.imgDiv}>
                <img src={product.productImage} alt={product.product} className={styles.proImg} />
              </div>
              <div className={styles.introText}>
                <h3
                  className={`product--card--title temp--font green-title ${styles.productTitle}`}
                >
                  {product.product}
                </h3>
                <p className="product--card--text text--just">{product.productInfo}</p>
                {smallScreen && (
                <div className={styles.actionDiv}>
                  <button
                    type="button"
                    className={styles.detailBtn}
                    onClick={() => showDetails(product.id)}
                  >
                    {isShowDetails[product.id] ? 'Show Less' : 'See Details'}
                  </button>
                  <button
                    type="button"
                    className={styles.orderBtn}
                    onClick={() => handleOrder(product.id)}
                  >
                    Order
                  </button>
                </div>
                )}
              </div>

            </div>
            {isShowDetails[product.id] && (
            <>
              {product.keyFeatures && (
              <div className="product--features">
                <h4 className="product--features--title" style={{ margin: '18px 0 5px' }}>Key Features</h4>
                <ul className="product--features--list disc">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="product--list--item">{feature}</li>
                  ))}
                </ul>
              </div>
              )}
              <div className="product--highlights" style={{ marginTop: '18px' }}>
                <div className="product--nav d-flex text-just">
                  <button
                    type="button"
                    className={`product--nav--item ${product.showBenefit ? 'active' : ''}`}
                    onClick={() => handleShowBenefit(index)}
                  >
                    Benefits
                  </button>
                  <button
                    type="button"
                    className={`product--nav--item ${product.showHowItWorks ? 'active' : ''}`}
                    onClick={() => handleShowHowItWorks(index)}
                  >
                    How it Works
                  </button>
                  <button
                    type="button"
                    className={`product--nav--item ${product.showDosage ? 'active' : ''}`}
                    onClick={() => handleShowDosage(index)}
                  >
                    Dosage
                  </button>
                </div>
                <div className="product--highlights--div">
                  <ul className={`lister disc ${product.showBenefit ? 'show' : 'hide'}`}>
                    {product.showBenefit && renderBenefits(product.benefits)}
                  </ul>
                  <ul className={`how-it-works disc ${product.showHowItWorks ? 'show' : 'hide'}`}>
                    {product.showHowItWorks && renderHow(product.howItWorks)}
                  </ul>
                  <ul className={`dosage disc ${product.showDosage ? 'show' : 'hide'}`}>
                    {product.showDosage && renderDosage(product.dosage)}
                  </ul>
                </div>
              </div>
            </>
            )}
            <div className={styles.ignoreDesk}>
              {product.keyFeatures && (
              <div className="product--features">
                <h4 className="product--features--title" style={{ margin: '18px 0 5px' }}>Key Features</h4>
                <ul className="product--features--list disc">
                  {product.keyFeatures.map((feature) => (
                    <li key={feature} className="product--list--item">{feature}</li>
                  ))}
                </ul>
              </div>
              )}
              <div className="product--highlights" style={{ marginTop: '18px' }}>
                <div className="product--nav d-flex text-just">
                  <button
                    type="button"
                    className={`product--nav--item ${product.showBenefit ? 'active' : ''}`}
                    onClick={() => handleShowBenefit(index)}
                  >
                    Benefits
                  </button>
                  <button
                    type="button"
                    className={`product--nav--item ${product.showHowItWorks ? 'active' : ''}`}
                    onClick={() => handleShowHowItWorks(index)}
                  >
                    How it Works
                  </button>
                  <button
                    type="button"
                    className={`product--nav--item ${product.showDosage ? 'active' : ''}`}
                    onClick={() => handleShowDosage(index)}
                  >
                    Dosage
                  </button>
                </div>
                <div className="product--highlights--div">
                  <ul className={`lister disc ${product.showBenefit ? 'show' : 'hide'}`}>
                    {product.showBenefit && renderBenefits(product.benefits)}
                  </ul>
                  <ul className={`how-it-works disc ${product.showHowItWorks ? 'show' : 'hide'}`}>
                    {product.showHowItWorks && renderHow(product.howItWorks)}
                  </ul>
                  <ul className={`dosage disc ${product.showDosage ? 'show' : 'hide'}`}>
                    {product.showDosage && renderDosage(product.dosage)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
