/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { Nav } from './components/Nav/Nav';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import Project from './components/pages/Projects';
import Error from './components/pages/Error';
import ProjectDetail from './components/pages/ProjectDetail';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<Services />} />
          <Route path="projects" element={<Project />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:title" element={<Blog />} />
          <Route path="terms-of-use" element={<Terms />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
