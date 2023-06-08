/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import '../../index.css';

const ProductCard = ({ products }) => {
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

  return (
    <>
      {productState.map((product, index) => (
        <div className="product--card--div d-flex g--32" key={product.id} style={{ lineHeight: '25px' }}>
          <div className="product--img--div d-flex column">
            <img src={product.productImage} alt={product.product} className="product--card--img max--100" />
            <Button text="Place Order" action={() => handleOrder(product.product)} />
          </div>
          <div className="product--card--text--div">
            <h3
              className="product--card--title temp--font"
              style={
                {
                  fontSize: '36px', lineHeight: '40px', marginBottom: '8px', color: '#455214',
                }
              }
            >
              {product.product}
            </h3>
            <p className="product--card--text text--just" style={{ fontSize: '18px' }}>{product.productInfo}</p>
            {product.keyFeatures && (
              <div className="product--features" style={{ fontSize: '18px' }}>
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
              <div className="product--highlights--div" style={{ fontSize: '18px' }}>
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
      ))}
    </>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
