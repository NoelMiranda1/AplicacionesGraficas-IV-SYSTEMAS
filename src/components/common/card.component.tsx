/** @format */
import Slider from "react-slick";
import { BsDashCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface props {
  data: any;
}
export const Card = (props: props) => {
  const { data } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
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
  const result = data.filter((movie: any) => movie?.poster_path !== null);

  return (
    <div className='cardImg'>
      <Slider {...settings}>
        {result?.map((movie: any) => {
          return (
            <Link
              key={`${movie?.title}+${movie?.id}`}
              to={`/AplicacionesGraficas-IV-SYSTEMAS/movie/${movie?.id}`}>
              {movie?.poster_path !== null ? (
                <div className='radius' style={{ borderRadius: "20px" }}>
                  <LazyLoadImage
                    alt={movie?.title}
                    style={{
                      width: "100%",
                      height: "350px",
                      padding: "30px",
                      borderRadius: "20px"
                    }}
                    className='imgSlider'
                    delayTime={300}
                    src={`https://image.tmdb.org/t/p/w1280/${movie?.poster_path}`}
                  />
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
