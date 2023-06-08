import React from 'react';
import { useParams } from 'react-router-dom';

import FeaturedProduct from '../../sub/feature';
import ARTICLES from '../../../storage/articles';

const Product = () => {
  const { productId } = useParams();

  const product = ARTICLES.map((product) => (
    <FeaturedProduct
      key={product.id}
      id={product.id}
      featureImg={product.featureImg}
      headline={product.featureHeadline}
      selected={product.id === productId}
    />
  ));
  return (
    <>
      <section className="feature--div product flex column">
        <div className="feature--header flex w--80">
          <h3 className="sub--theme temp--font light--green">Our Featured Products</h3>
          <hr className="hr--theme w--100" />
        </div>
        <div className="feature--container flex">{product}</div>
      </section>
    </>
  );
};

export default Product;
