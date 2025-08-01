import { Card, Col, Container, Row } from "react-bootstrap";
import santigonz from "../../assets/santigonz03.png"
import andrea from "../../assets/andrea-piacquadio.jpg"
import gregorio from "../../assets/Gregorio.jpg"

const About = () => {
    return (
      <Container className="my-5">
        <h1 className="text-center fs-1">Nosotros</h1>
        <h3 className="text-center my-4">
          "Con pasión y código, nuestro equipo de desarrolladores construyó una
          página de música donde cada acorde y melodía cobra vida."
        </h3>
        <Row>
          <Col md={4} lg={4} className="my-3">
            <Card className="h-100 w-100">
              <img
                src={santigonz}
                alt="Omar Mattos"
                className="img-fluid card-img-top rounded-circle"
              />
              <Card.Body>
                <Card.Title className="text-center fs-4">
                  Diego Caucota
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4} className="my-3">
            <Card className="h-100 w-100">
              <img
                src={andrea}
                alt="Santiago Lacki"
                className="img-fluid card-img-top rounded-circle"
              />
              <Card.Body>
                <Card.Title className="text-center fs-4">
                  Andrea Piacquadio
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4} className="my-3">
            <Card className="h-100 w-100">
              <img
                src={gregorio}
                alt="Santiago Gonzalez"
                className="img-fluid card-img-top rounded-circle"
              />
              <Card.Body>
                <Card.Title className="text-center fs-4">
                  Astor Piazolla
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default About;