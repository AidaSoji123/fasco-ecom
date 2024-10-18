import React from "react";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import Ultimatesale from "./components/Ultimatesale";
import Brands from "./components/Brands";
import NewarrivalHeader from "./components/NewarrivalHeader";
import NewarrivalGrid from "./components/NewarrivalGrid";
import Peaky from "./components/Peaky";
import ServiceBanner from "./components/ServiceBanner";
import Instagram from "./components/Instagram";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import DealsCarousel from "./components/DealsCarousel";

const App = () => {
  return (
    <div className="home-container ms-5 ps-5 mt-5">
      <Navbarr />
      <Ultimatesale />
      <Brands />
      <DealsCarousel/>
      <NewarrivalHeader />
      <NewarrivalGrid />
      <Peaky />
      <ServiceBanner/>
      <Instagram/>
      <TestimonialCarousel/>
      <Subscription/>
      <Footer/>
    </div>
  );
};

export default App;
