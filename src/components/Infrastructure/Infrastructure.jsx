import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Infrastructure.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* OPTION A (recommended): place images in `public/` and reference with leading slash:
   public/ourcampus1.jpg, public/ourcampus2.jpg, ... */
const images = [
  { id: 1, src: "/ourcampus1.jpg", alt: "Library" },
  { id: 2, src: "/ourcampus2.jpg", alt: "Playground" },
  { id: 3, src: "/ourcampus3.jpg", alt: "Classroom" },
  { id: 4, src: "/ourcampus4.jpg", alt: "Auditorium" },
  { id: 5, src: "/ourcampus4.jpg", alt: "Computer Lab" },
];

/* OPTION B (alternate): if you keep images under src/assets, uncomment imports below and replace images[] with imported variables
import campus1 from '../../assets/ourcampus1.jpg';
...
const images = [{ id:1, src: campus1, alt: '...' }, ...];
*/

export default function Infrastructure() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    arrows: false, // using custom external arrows below
    lazyLoad: "ondemand",
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="infra-section">
      <h2 className="infra-title">Infrastructure</h2>

      <div className="infra-slider-wrap">
        <Slider ref={sliderRef} {...settings} className="infra-slider">
          {images.map((img) => (
            <div key={img.id} className="infra-slide">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="infra-arrows">
        <button
          className="arrow-btn"
          aria-label="Previous"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft />
        </button>

        <button
          className="arrow-btn"
          aria-label="Next"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
