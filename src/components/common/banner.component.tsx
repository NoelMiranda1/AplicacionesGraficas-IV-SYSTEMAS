/** @format */
import Slider from "react-slick";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
interface props {
  data: any;
}
export const Banner = (props: props) => {
  const { data } = props;
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  //   <AiOutlineArrowLeft color='#000' size={70} alt='prevArrow' {...props} />
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  //   <AiOutlineArrowRight color='#000' size={70} alt='nextArrow' {...props} />
  // );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // console.log("dataBannr", data);
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Slider {...settings}>
        {data?.map((movie: any) => {
          return (
            <div>
              <img
                style={{
                  width: "75%",
                  height: "100%",
                  padding: "30px"
                }}
                key={`${movie.Title}+${movie.imdbID}`}
                src={movie?.Poster}
                alt={movie?.Title}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
