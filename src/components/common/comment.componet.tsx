/** @format */

import { Card, CardTitle, CardText, Row, Col } from "reactstrap";
import Face from "../../assets/images/face.jpg";
export const Comment = () => {
  return (
    <Row>
      <Col style={{ margin: "30px" }}>
        <Card body style={{ backgroundColor: "#0B1322" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}>
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
            <div style={{ maxWidth: "80%" }}>
              <CardTitle tag='h5' style={{ color: "white" }}>
                Name
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident sit obcaecati quod natus eligendi officia labore eos
                autem dolorum expedita, dolor quasi! Aliquam non perferendis
                quibusdam id! Vero veritatis nemo ullam praesentium consectetur
                iure necessitatibus doloribus?
              </CardText>
            </div>
          </div>
        </Card>
      </Col>
      <Col style={{ margin: "30px" }}>
        <Card body style={{ backgroundColor: "#0B1322" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}>
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
            <div style={{ maxWidth: "80%" }}>
              <CardTitle tag='h5' style={{ color: "white" }}>
                Name
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident sit obcaecati quod natus eligendi officia labore eos
                autem dolorum expedita, dolor quasi! Aliquam non perferendis
                quibusdam id! Vero veritatis nemo ullam praesentium consectetur
                iure necessitatibus doloribus?
              </CardText>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};
