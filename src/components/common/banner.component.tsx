/** @format */
import Slider from "react-slick";
import { BsDashCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Alert } from "reactstrap";
interface props {
  data: any;
}
export const Banner = (props: props) => {
  const { data } = props;

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  const result = data.filter((movie: any) => movie?.backdrop_path !== null);
  console.log("result", result);

  return (
    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
      <Slider {...settings}>
        {result.length === 0 ? (
          <Alert color='danger'>No se ha encontrado resultados</Alert>
        ) : null}
        {result?.map((movie: any) => {
          const urlPhotoFirst =
            movie?.backdrop_path !== null ? movie?.backdrop_path : null;
          return (
            <Link
              key={`${movie?.title}+${movie?.id}`}
              to={`/AplicacionesGraficas-IV-SYSTEMAS/movie/${movie?.id}`}>
              {urlPhotoFirst ? (
                <div style={{ margin: "10px" }}>
                  <LazyLoadImage
                    alt={movie?.title}
                    style={{
                      width: "100%",
                      height: "750px",
                      borderRadius: "5px",
                      objectFit: "-moz-initial"
                    }}
                    key={`${movie?.title}+${movie?.id}`}
                    delayTime={300}
                    src={`https://image.tmdb.org/t/p/w1280/${urlPhotoFirst}`}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <BsDashCircleFill size={200} color='#fff' />
                </div>
              )}
              <div className='titles'>
                {movie?.title.length > 30 ? (
                  <h1 className='titleMovie'>
                    {movie?.title.substr(0, 30)}...
                  </h1>
                ) : (
                  <h1 className='titleMovie'>{movie?.title}</h1>
                )}
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};
