import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { longList } from "./data";
import { FaQuoteRight } from "react-icons/fa6";
import Slide from "./Slide";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <div className="slick-container">
      <Slider {...settings}>
        {longList.map((item) => {
          const { image, name, title, quote, id } = item;
          return (
            <div key={id}>
              <img className="person-img" src={image} alt={name} />
              <h3 className="name">{name}</h3>
              <h5 className="title">{title}</h5>
              <p className="text">{quote}</p>
              <i className="icon">
                <FaQuoteRight />
              </i>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
