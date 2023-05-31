/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Top from '../sections/jumbotron/top';
import Pagination from '../Nav/pagination';
import '../sections/css/about.css';
import Article from '../sub/Article';
import ARTICLES from '../../storage/articles';
import PRODUCTS from '../../storage/product';
import '../../App.css';
import ProductCard from '../sub/ProductCard';

const Products = () => (
  <div className="sub--container flex column j-c-c a-i-c" style={{ backgroundColor: '#f9faf7' }}>
    <Top
      title="Our Products"
      id="Products"
      linkOne={{ link: 'Livestock Supplement', id: 'Livestock' }}
      linkTwo={{ link: 'Rice', id: 'Rice' }}
      linkThree={{ link: 'FIEMS', id: 'Fiems' }}
    />
    <div className="about--content about--product page--content margin j-c-c a-i-c flex column">
      <p className="about--text w--80 text--just">
        El-kanis and Partners&lsquo; products are of the highest quality, produced with a commitment
        to sustainability and innovation. By utilizing cutting-edge technology and sustainable
        practices, the company is able to produce food products that are both nutritious and
        environmentally friendly.
      </p>
      <Article article={ARTICLES[0]} id="Livestock" />
    </div>
    <article className="drive-us g--32 d-flex column w--70" style={{ marginTop: '5vh' }}>
      <ProductCard products={PRODUCTS} />
    </article>
    <section className="about--product">
      <Article article={ARTICLES[2]} id="Rice" />
    </section>
    <Pagination id="Products" />
  </div>
);

export default Products;
