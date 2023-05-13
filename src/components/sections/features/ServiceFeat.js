import React from 'react';
import FeaturedProduct from '../../sub/feature';
import FeaturedService from '../../../storage/service';

const Service = () => {
  const services = FeaturedService.map((service) => (
    <FeaturedProduct
      key={service.id}
      featureImg={service.featureImg}
      headline={service.featureHeadline}
    />
  ));
  return (
    <>
      <section className="feature--div flex full">
        <h3 className="sub--theme light--green">Our Featured Services</h3>
        {services}
      </section>
    </>
  );
};

export default Service;
