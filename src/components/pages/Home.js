import React from 'react';
import { Nav } from '../Nav/Nav';
import Hero from '../sections/Hero';
import Motivation from '../sections/Motivation';
import BgVideo from '../sections/BgVideo';
import Product from '../sections/features/Product';
import Service from '../sections/features/Service';
import Funnel from '../sections/Funnel';
import Sponsors from '../sections/Sponsors';

const Home = () => (
  <div className="home--container">
    <BgVideo />
    <Nav />
    <Hero />
    <Motivation />
    <Product />
    <Service />
    <Funnel />
    <Sponsors />
  </div>
);

export default Home;
