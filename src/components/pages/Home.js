import React from 'react';
import Hero from '../sections/Hero';
import Motivation from '../sections/Motivation';
import Product from '../sections/features/ProductFeat';
import Service from '../sections/features/ServiceFeat';
import Funnel from '../sections/Funnel';
import Sponsors from '../sections/Sponsors';
import Footer from '../Nav/Footer';

const Home = () => (
  <div className="home--container w--100">
    <Hero />
    <Motivation />
    <Product />
    <Service />
    <Funnel />
    <Sponsors />
    <Footer />
  </div>
);

export default Home;
