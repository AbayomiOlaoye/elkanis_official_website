import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useParams } from 'react-router-dom';
import FeaturedProduct from '../../sub/feature';
import FeaturedService from '../../../storage/service';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const { serviceId } = useParams();
  const services = FeaturedService.map((service) => (
    <FeaturedProduct
      key={service.id}
      id={service.id}
      featureImg={service.featureImg}
      headline={service.featureHeadline}
      selected={service.id === serviceId}
    />
  ));
  return (
    <>
      <section className="feature--div services flex column" data-aos="fade-left">
        <div className="feature--header flex w--80">
          <h3 className="sub--theme temp--font light--green" style={{ fontSize: '3vw' }}>Our Featured Services</h3>
          <hr className="hr--theme w--80" />
        </div>
        <div className="feature--container services d-flex">{services}</div>
      </section>
    </>
  );
};

export default Service;
