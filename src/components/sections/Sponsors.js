import React from 'react';
import SPONSORS from '../../storage/sponsors';

const Sponsors = () => {
  const sponsors = SPONSORS.map((sponsor) => (
    <img src={sponsor} alt="sponsor logo" key={sponsor} />
  ));
  return (
    <section className="sponsors--page">
      { sponsors }
    </section>
  );
};

export default Sponsors;
