import React from "react";
import Ultimatesale from "../components/Ultimatesale";
import Brands from "../components/Brands";
import DealsCarousel from "../components/DealsCarousel";
import NewarrivalHeader from "../components/NewarrivalHeader";
import NewarrivalGrid from "../components/NewarrivalGrid";
import Peaky from "../components/Peaky";
import ServiceBanner from "../components/ServiceBanner";
import Instagram from "../components/Instagram";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div className="home-container ms-5">
      <Ultimatesale />
      <Brands />
      <DealsCarousel />
      <NewarrivalHeader />
      <NewarrivalGrid />
      <Peaky />
      <ServiceBanner />
      <Instagram />
      <TestimonialCarousel />
      <Subscription />
    </div>
  );
};

export default Home;
