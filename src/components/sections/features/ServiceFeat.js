import React from 'react';
import { useParams } from 'react-router-dom';
import FeaturedProduct from '../../sub/feature';
import FeaturedService from '../../../storage/service';

const Service = () => {
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
      <section className="feature--div services flex column">
        <div className="feature--header flex w--80">
          <h3 className="sub--theme temp--font light--green">Our Featured Services</h3>
          <hr className="hr--theme w--100" />
        </div>
        <div className="feature--container services flex">{services}</div>
      </section>
    </>
  );
};

export default Service;
