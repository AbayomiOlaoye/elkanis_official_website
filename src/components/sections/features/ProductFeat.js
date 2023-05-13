import React from 'react';
import FeaturedProduct from '../../sub/feature';
import ARTICLES from '../../../storage/articles';

const Product = () => {
  const product = ARTICLES.map((product) => (
    <FeaturedProduct
      key={product.id}
      featureImg={product.featureImg}
      headline={product.featureHeadline}
    />
  ));
  return (
    <>
      <section className="feature--div flex">
        <h3 className="sub--theme light--green">Our Featured Products</h3>
        {product}
      </section>
    </>
  );
};

export default Product;
