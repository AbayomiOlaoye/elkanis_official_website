import React from 'react';
import Top from '../sections/jumbotron/top';
import Pagination from '../Nav/pagination';
import '../sections/css/about.css';
import Article from '../sub/Article';
import ARTICLES from '../../storage/articles';
import '../../App.css';

const Products = () => (
  <div className="sub--container about--bg flex column j-c-c a-i-c">
    <Top
      title="Our Products"
      id="Products"
      linkOne={{ link: 'Livestock Supplement', id: 'Livestock' }}
      linkTwo={{ link: 'Rice', id: 'Rice' }}
      linkThree={{ link: 'FIEMS', id: 'Fiems' }}
    />
    <div className="about--content page--content margin j-c-c a-i-c flex column">
      <p className="about--text w--70 text--just">
        El-kanis and Partners&lsquo; products are of the highest quality, produced with a commitment
        to sustainability and innovation. By utilizing cutting-edge technology and sustainable
        practices, the company is able to produce food products that are both nutritious and
        environmentally friendly.
      </p>
      <Article article={ARTICLES[0]} />
    </div>
    <article className="drive-us tech--section g--32 grid w--70" style={{ marginTop: '5vh' }}>
      <div className="rice--img--div w--100 d-flex a-i-c">
        <img src="" alt="A man transporting rice" className="rice--img" />
        <div className="span--overlay w--100" />
      </div>
      <div className="drive-us--text flex j-c-c flow column">
        <h3 style={{ fontSize: '68px' }} className=" boarder green-title-text special-title temp--font light--green">Technology Integration</h3>
        <p className="sub--text para-one text--just">
          El-kanis and Partners&lsquo; use of technology extends beyond production processes.
          The company also employs advanced logistics and supply chain management systems to
          streamline distribution and reduce waste.
        </p>
        <p className="sub--text text--just">
          By utilizing data-driven approaches to monitor inventory levels, demand patterns,
          and transportation routes, the company is able to minimize food loss and optimize
          the delivery of its products to customers in a timely and efficient manner.
        </p>
      </div>
    </article>
    <article className="drive-us d-flex column w--80">
      <div className="team-top d-flex column a-i-c gap-one">
        <img src="" alt="vision" className="vision--img icon" />
        <h3 style={{ fontSize: '60px' }} className="m-40 green-title-text temp--font light--green">Meet the Team</h3>
      </div>
      <div className="team--div grid a-i-c">
        Let&lsquo;s go
      </div>
    </article>
    <Pagination id="Products" />
  </div>
);

export default Products;
