import React from 'react';
import Video from '../../assets/backgrounds/drone-view.mp4';

const BgVideo = () => (
  <video autoPlay muted loop className="media">
    <source src={Video} type="video/mp4" />
  </video>
);

export default BgVideo;
