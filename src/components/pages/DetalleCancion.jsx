import { useEffect, useRef, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

// Componente que muestra los detalles de una canción específica.
// Utiliza el hook useParams para obtener el ID de la canción desde la URL.
// Utiliza el hook useState para manejar el estado de la canción y si está cargando.
// Utiliza el hook useEffect para buscar la canción por ID al cargar el componente.
// Si la canción no se encuentra, redirige a una página de error.
// Muestra la imagen, título, artista, álbum, género y duración de la canción.

const DetalleCancion = ({ buscarCancion }) => {
  const { id } = useParams();
  const [cancion, setCancion] = useState({});
  const [cargando, setCargando] = useState(true);
  const navegacion = useNavigate();
  const audioRef = useRef(null);

  useEffect(()=>{
        const cancionBuscada = buscarCancion(id)
        console.log(cancionBuscada)
        if(cancionBuscada === undefined){
            navegacion('*')
        }else{
            setCancion(cancionBuscada)
            setCargando(false)
        }
    },[])

    if(cargando){
        return null;
    }

  return (
    <section className="bg-index">
      <Container className="mt-3 py-5 bg-card rounded-4 w-50">
        <Row className="mb-5">
          <Col className="text-center">
            <Card.Img
              variant="top"
              src={cancion.imagen}
              alt={cancion.titulo}
              className="w-50 rounded-3 imagen-detalle contenedorImagen"
            />
          </Col>
        </Row>
        <Row>
          <Card.Body>
            <Card.Title className="fw-bold fs-1 text-center mx-1">{cancion.titulo}</Card.Title>
            <Card.Text className="fw-semibold fs-3 text-center color-secundario mx-1">{cancion.artista}</Card.Text>
            <Card.Text className="fw-light fs-4 text-center color-secundario mx-1">
              <span className="fw-semibold">Álbum: </span> {cancion.album}
            </Card.Text>
            <div className="d-flex justify-content-evenly mt-5 mx-1">
              <div className="fw-light fs-5"><span className="fw-semibold">Género: </span> {cancion.genero}</div>
              <div className="fw-light fs-5"><span className="fw-semibold">Duración:</span> {cancion.duracion}</div>
            </div>
          </Card.Body>
        </Row>
        <hr className="my-4" />

        <Row className="justify-content-center mt-4">
          {cancion.audio && (
            <audio ref={audioRef} src={cancion.audio} preload="auto" controls />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default DetalleCancion;
