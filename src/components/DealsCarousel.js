import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';  // You can add custom styles here

const DealsCarousel = () => {
  // Countdown logic
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="deals-carousel pt-5 mb-5">
      <div className="container my-5 ms-5 mt-5 ps-5">
        <div className="row ms-4 p-2">
          <div className="col-md-6 text-left">
            <h2>Deals Of The Month</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ultricies est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ultricies est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper ultricies est.
            </p>
            <button className="btn btn-dark mt-3 mb-3">Buy Now</button>
            
              <div><h5>Hurry, Before It's Too Late!</h5></div>
              <div className="d-flex time-container mt-5">
                <div className="time-box ms-0 ">
                  <span>{timeLeft.days || '00'}</span>
                  <p>Days</p>
                </div>
                <div className="time-box">
                  <span>{timeLeft.hours || '00'}</span>
                  <p>Hr</p>
                </div>
                <div className="time-box">
                  <span>{timeLeft.minutes || '00'}</span>
                  <p>Mins</p>
                </div>
                <div className="time-box">
                  <span>{timeLeft.seconds || '00'}</span>
                  <p>Sec</p>
                </div>
              </div>
          
          </div>
          <div className="col-md-6 ">
            <Carousel indicators={true} controls={true}>
              <Carousel.Item>
                <img
                  className=" cimg"
                  src="./images/a1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Spring Sale</h3>
                  <p>30% OFF</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="cimg"
                  src="./images/a2.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Summer Collection</h3>
                  <p>New Arrivals</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="cimg"
                  src="./images/a3.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Exclusive Offers</h3>
                  <p>Up to 50% OFF</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsCarousel;
