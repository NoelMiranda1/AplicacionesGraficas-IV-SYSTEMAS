/** @format */
import Slider from "react-slick";
import { BsDashCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import Pic from "../../assets/images/images.png";
interface props {
  data: any;
}
export const Card = (props: props) => {
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
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // const { backdrop_path, title, release_date, poster_path } = data;
  console.log("data", data);
  const result = data.filter((movie: any) => movie?.poster_path !== null);

  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Slider {...settings}>
        {result?.map((movie: any) => {
          return (
            <Link
              key={`${movie?.title}+${movie?.id}`}
              to={`/movie/${movie?.id}`}>
              {movie?.poster_path !== null ? (
                <div className='radius' style={{ borderRadius: "20px" }}>
                  <LazyLoadImage
                    alt={movie?.title}
                    style={{
                      width: "100%",
                      height: "350px",
                      padding: "30px"
                    }}
                    delayTime={300}
                    src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
                  />
                  {/* <img
                    className='radius'
                    style={{
                      width: "100%",
                      height: "350px",
                      padding: "30px"
                    }}
                    key={`${movie?.title}+${movie?.id}`}
                    src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
                    alt={movie?.title}
                  /> */}
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <BsDashCircleFill size={200} color='#fff' />
                </div>
              )}
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};
