import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Landing.css";

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/img/landing/dress1.jpg`,
    caption: "Discover the elegance of European dresses",
    alt: "Elegant European dress on model",
  },
  {
    image: `${process.env.PUBLIC_URL}/img/landing/dress5.png`,
    caption: "Fresh styles for Spring 2025",
    alt: "New spring dresses",
  },
  {
    image: `${process.env.PUBLIC_URL}/img/landing/dress4.png`,
    caption: "Crafted from the finest materials",
    alt: "Close-up of luxurious dress fabric",
  },
];

export default function Landing() {
  return (
    <>
      <section id="landing" className="landing-section">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={600}
          emulateTouch
        >
          {slides.map(({ image, caption, alt }, idx) => (
            <div key={idx}>
              <img src={image} alt={alt || `Slide ${idx + 1}`} />
            </div>
          ))}
        </Carousel>
      </section>

      <div className="landing-quote">
        <blockquote>
          “Elegance is the only beauty that never fades.”
          <span>— Audrey Hepburn</span>
        </blockquote>
         <button className="shop-now-button" onClick={() => window.location.href = process.env.PUBLIC_URL + '/shop'}
>
    Shop Now
  </button>
      </div>
    </>
  );
}
