/** @format */
import Slider from "react-slick";
export const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <Slider {...settings}></Slider>
    </div>
  );
};
