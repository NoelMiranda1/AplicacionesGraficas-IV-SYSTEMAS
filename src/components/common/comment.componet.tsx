/** @format */

import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import Face from "../../assets/images/face.jpg";
import { AiFillStar } from "react-icons/ai";

export const Comment = () => {
  return (
    <Row>
      <Col style={{ margin: "30px" }}>
        <Card body style={{ backgroundColor: "#0B1322" }}>
          <div className='card'>
            <div>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "200px"
                }}
                src={Face}
                alt='Face'
              />
            </div>
            <div className='info'>
              <Row body>
                <Col>
                  <CardTitle tag='h5' style={{ color: "white" }}>
                    Name
                  </CardTitle>
                </Col>
                <Col>
                  <h5 style={{ color: "yellow" }}>09/10/2021</h5>
                </Col>
              </Row>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident sit obcaecati quod natus eligendi officia labore eos
                autem dolorum expedita, dolor quasi! Aliquam non perferendis
                quibusdam id! Vero veritatis nemo ullam praesentium consectetur
                iure necessitatibus doloribus?
              </CardText>
              <h6 style={{ color: "yellow" }}>Leer mas...</h6>
            </div>
          </div>
        </Card>
      </Col>
      <Col style={{ margin: "30px" }}>
        <Card body style={{ backgroundColor: "#0B1322" }}>
          <div className='card'>
            <div>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "200px"
                }}
                src={Face}
                alt='Face'
              />
            </div>
            <div className='info'>
              <Row body>
                <Col>
                  <CardTitle tag='h5' style={{ color: "white" }}>
                    Name
                  </CardTitle>
                </Col>
                <Col>
                  <h5 style={{ color: "yellow" }}>09/10/2021</h5>
                </Col>
              </Row>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident sit obcaecati quod natus eligendi officia labore eos
                autem dolorum expedita, dolor quasi! Aliquam non perferendis
                quibusdam id! Vero veritatis nemo ullam praesentium consectetur
                iure necessitatibus doloribus?
              </CardText>
              <h6 style={{ color: "yellow" }}>Leer mas...</h6>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
