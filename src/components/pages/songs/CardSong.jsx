import { Card, Col} from "react-bootstrap";
import { Link } from "react-router";

const CardSong = ({cancion}) => {
    return (
    <Col md={6} lg={4} className="mb-5">
            <Card className="bg-card border-0 h-100">
                <div className="d-flex flex-row">
                    <div className="flex-shrink-0 contenedor-imagen">
                        <Card.Img variant="top" src={cancion.imagen} className="card-size"/>
                    </div>
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                        <Card.Title className="fw-bold fs-4">{cancion.titulo}</Card.Title>
                        <Card.Text className="fw-light fs-6 color-secundario">
                        {cancion.artista}
                        </Card.Text>
                    </div>
                    <div className="d-flex ">
                        <Link className="rounded-5 pe-0 pb-0" to={'/detalle/'+cancion.id}><i className="bi bi-play-circle fs-1 color-secundario"></i></Link>
                    </div>
                </Card.Body>
                </div>
            </Card>

    </Col>
    );
};

export default CardSong;