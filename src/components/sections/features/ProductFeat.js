import React from 'react';
import 'aos/dist/aos.css';
import FeaturedProduct from '../../sub/feature';
import ARTICLES from '../../../storage/articles';

const Product = () => {
  const product = ARTICLES.map((product) => (
    <FeaturedProduct
      key={product.id}
      id={product.id}
      featureImg={product.featureImg}
      headline={product.featureHeadline}
    />
  ));
  return (
    <>
      <section className="feature--div product flex column">
        <div className="feature--header flex w--80">
          <h3 className="sub--theme temp--font light--green" style={{ fontSize: '3vw' }}>Our Featured Products</h3>
          <hr className="hr--theme w--80" />
        </div>
        <div className="feature--container product d-flex">{product}</div>
      </section>
    </>
  );
};

export default Product;
