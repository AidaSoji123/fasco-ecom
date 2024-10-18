import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialCarousel.css'; // Import your styles

const testimonials = [
  {
    name: "James K.",
    role: "Traveler",
    rating: 5,
    content: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    image: "./images/rev1.png"
  },
  {
    name: "Sarah L.",
    role: "Photographer",
    rating: 5,
    content: "I'm so happy with the service. Thanks, keep up the good work! It's incredible.",
    image: "./images/rev2.png"
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <center>
      <br /><br />
        <div className="carousel-container">
          <h2>This Is What Our Customers Say</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.</p>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} width="80" height="80" />
                  <div className="testimonial-content-container">
                    <p className="testimonial-content">{testimonial.content}</p>
                    <div className='star'>{'★'.repeat(testimonial.rating)}</div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div>{testimonial.role}</div>
                    
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </center>
    </>
  );
};

export default TestimonialCarousel;
