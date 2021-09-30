/** @format */
import Slider from "react-slick";
interface props {
  data: any;
}
export const card = (props: props) => {
  const { data } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <p>{}</p>
        </div>
      </Slider>
    </div>
  );
};
