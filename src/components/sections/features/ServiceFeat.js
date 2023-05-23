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
      <section className="feature--div flex column">
        <div className="feature--header flex w--100">
          <h3 className="sub--theme temp--font light--green">Our Featured Services</h3>
          <hr className="hr--theme w--100" />
        </div>
        <div className="feature--container flex">{services}</div>
      </section>
    </>
  );
};

export default Service;
