/** @format */
import Slider from "react-slick";
import { BsDashCircleFill } from "react-icons/bs";
// import Pic from "../../assets/images/images.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />
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
  // const { backdrop_path, title, release_date, poster_path } = data;
  // console.log("data", data);
  // data
  const result = data.filter((movie: any) => movie?.backdrop_path !== null);
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <Slider {...settings}>
        {result?.map((movie: any) => {
          console.log(" movie?.backdrop_path", movie?.backdrop_path);
          const urlPhotoFirst =
            movie?.backdrop_path !== null ? movie?.backdrop_path : null;
          // const bannerUrl = urlPhotoFirst ? urlPhotoFirst
          return (
            <Link
              key={`${movie?.title}+${movie?.id}`}
              to={`/movie/${movie?.id}`}>
              {urlPhotoFirst ? (
                <div className='radius' style={{ borderRadius: "20px" }}>
                  <LazyLoadImage
                    alt={movie?.title}
                    style={{
                      width: "100%",
                      height: "500px",
                      padding: "30px",
                      marginRight: "100px"
                    }}
                    key={`${movie?.title}+${movie?.id}`}
                    delayTime={300}
                    src={`https://image.tmdb.org/t/p/w1280/${urlPhotoFirst}`}
                  />
                  {/* <img
                    className='radius'
                    style={{
                      width: "100%",
                      height: "500px",
                      padding: "30px",
                      marginRight: "100px"
                    }}
                    key={`${movie?.title}+${movie?.id}`}
                    src={`https://image.tmdb.org/t/p/w1280/${urlPhotoFirst}`}
                    alt={movie?.title}
                  /> */}
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
                <h1 className='titleMovie'>{movie?.title}</h1>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};
