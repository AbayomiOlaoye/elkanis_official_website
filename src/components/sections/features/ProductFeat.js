import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeaturedProduct from '../../sub/feature';
import ARTICLES from '../../../storage/articles';

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

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
      <section className="feature--div product flex column" data-aos="fade-up">
        <div className="feature--header flex w--80">
          <h3 className="sub--theme temp--font light--green">Our Featured Products</h3>
          <hr className="hr--theme w--80" />
        </div>
        <div className="feature--container product d-flex">{product}</div>
      </section>
    </>
  );
};

export default Product;
