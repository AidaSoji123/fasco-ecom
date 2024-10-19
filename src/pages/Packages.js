import React from 'react';
import Peaky from '../components/Peaky';
import ServiceBanner from '../components/ServiceBanner';
import Instagram from '../components/Instagram';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Subscription from '../components/Subscription';

const Packages = () => {
  return (
    <div>
          <Peaky />
          <ServiceBanner />
          <Instagram/>
          <TestimonialCarousel />
          <Subscription />
    </div>
  );
}

export default Packages;
