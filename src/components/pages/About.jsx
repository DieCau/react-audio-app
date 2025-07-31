import { Card, Col, Container, Row } from "react-bootstrap";
import santigonz from "../../assets/santigonz03.png"
import santilacki from "../../assets/santilacki02.png"
import omarmattos from "../../assets/omarmatt01.png"

const About = () => {
    return (
        <Container className="my-5">
            <h1 className='text-center fs-1'>Nosotros</h1>
            <h3 className="text-center my-4">"Con pasión y código, nuestro equipo de desarrolladores construyó una página de música donde cada acorde y melodía cobra vida."</h3>
            <Row>
                <Col md={4} lg={4} className="my-3">
                <Card className="w-100">
                    <img src={omarmattos} alt="Omar Mattos" className="img-fluid card-img-top"/>
                    <Card.Body>
                        <Card.Title className="text-center fs-4">Diego Caucota</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-3">
                <Card className="w-100">
                    <img src={santilacki} alt="Santiago Lacki" className="img-fluid card-img-top"/>
                    <Card.Body>
                        <Card.Title className="text-center fs-4">Gisela Ortiz</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4} lg={4} className="my-3">
                <Card className="w-100">
                    <img src={santigonz} alt="Santiago Gonzalez" className="img-fluid card-img-top"/>
                    <Card.Body>
                        <Card.Title className="text-center fs-4">Astor Piazolla</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;