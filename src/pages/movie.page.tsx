/** @format */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/common/card.component";
import IMG from "../assets/images/ban.png";
import API from "../utils/api";
import { Comment } from "../components/common/comment.componet";
import { Col, Row } from "reactstrap";

const api = new API();

export const MoviePage = () => {
  const params: any = useParams();
  const [data, setData] = useState<any>([]);
  const [secondMovie, setSecondMovie] = useState<any>([]);
  const [errors, setErrors] = useState("");
  async function fetchData() {
    const response = await api.getDetailsMovie(params?.id);
    if (response.success === false) {
      setErrors(response?.status_message);
    } else {
      setData(response);
    }
  }
  async function getAlternativeMovie() {
    const response = await api.getAlternativeMovie(params?.id);
    if (response.success === false) {
      setErrors(response?.status_message);
    } else {
      setSecondMovie(response.results);
    }
  }
  useEffect(() => {
    fetchData();
    getAlternativeMovie();
  }, [params?.id]);
  const result = secondMovie?.filter(
    (movie: any) => movie?.backdrop_path !== null
  );

  return (
    <>
      {errors === "" ? (
        <div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%"
            }}>
            <div className='movieDetails'>
              <img
                style={{
                  width: "350px",
                  height: "500px"
                }}
                src={`https://image.tmdb.org/t/p/w1280/${data?.poster_path}`}
                alt={data.title}
              />
              <div className='resumen'>
                {/* //-webkit-text-stroke: 2px black

                  BORDER LETTER
                
                */}
                <h1 style={{ color: "#fff", margin: "10px" }}>{data?.title}</h1>
                <h3 style={{ color: "#fff", margin: "10px" }}>
                  {data?.overview}
                </h3>
                <h2 style={{ color: "#fff", margin: "10px" }}>Genero</h2>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    maxWidth: "400px",
                    margin: "10px"
                  }}>
                  {data?.genres?.map((e: { id: number; name: string }) => {
                    return <h3 style={{ color: "#fff" }}>{e.name}</h3>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <h2 style={{ color: "#fff", margin: "20px" }}>Compañías</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "400px",
                maxHeight: "200px",
                margin: "10px"
              }}>
              {data?.production_companies?.map(
                (e: { name: string; logo_path: string; id: number }) => {
                  return (
                    <Row
                      style={{
                        margin: "10px",
                        maxHeight: "200px"
                      }}>
                      {e.logo_path !== null ? (
                        <Col>
                          <img
                            style={{
                              width: "100px",
                              maxHeight: "150px"
                            }}
                            src={`https://image.tmdb.org/t/p/w1280/${e?.logo_path}`}
                            alt={e.name}
                          />
                        </Col>
                      ) : (
                        <Col>
                          <img
                            style={{
                              width: "100px",
                              maxHeight: "150px"
                            }}
                            src={IMG}
                            alt={e.name}
                          />
                        </Col>
                      )}
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: 600,
                          marginTop: "10px"
                        }}>
                        {e?.name}
                      </p>
                    </Row>
                  );
                }
              )}
            </div>
          </div>
          <h2 style={{ color: "#fff", margin: "20px" }}>Comentarios</h2>
          <Comment />
          <h2 style={{ color: "#fff", margin: "20px" }}>Titulos Similares</h2>
          <Card data={result} />
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <h1 className='errorText'>{errors}</h1>
        </div>
      )}
    </>
  );
};
