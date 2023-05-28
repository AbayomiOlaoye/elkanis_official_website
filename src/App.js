/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { Nav } from './components/Nav/Nav';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Project from './components/pages/Project';
import Blog from './components/pages/Blog';
// import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
