import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Corn from '../../assets/generic/corn.png';
import Worker from '../../assets/generic/workman.png';
import Drone from '../../assets/generic/wk_drone.png';
import Rice from '../../assets/generic/rice_trans.png';
import Pepper from '../../assets/generic/pepper.png';
import AgTech from '../../assets/generic/agritech.png';

const images = [Corn, Worker, Drone, Rice, Pepper, AgTech];
const imageList = images.map((image) => (
  <div className="image--container w--100" key={image}>
    <img src={image} className="gallery--item w--100" data-aos="fade-down" alt="" />
    <div className="image--overlay--main" data-aos="fade-up" />
  </div>
));

const Smart = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <figure className="gallery grid" data-aos="zoom-out">
      {imageList}
    </figure>
  );
};

export default Smart;
