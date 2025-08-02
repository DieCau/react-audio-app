import { Container, Form, Row, Col} from "react-bootstrap";
import CardCancion from "./songs/CardSong";
import { useState } from "react";
import BannerVideo from "../../assets/Banner.mp4"

// Componente de la página de Home 
// Muestra las canciones filtradas por género y permite buscar canciones por título

const Home = ({canciones}) => {
    const [terminoBusqueda, setTerminoBusqueda] = useState('')
    const cancionesRock = canciones.filter((itemCancion) => itemCancion.genero === 'Rock')
    const cancionesPop= canciones.filter((itemCancion) => itemCancion.genero === 'Pop')
    const cancionesElectronica = canciones.filter((itemCancion) => itemCancion.genero === 'Electronica')
    const cancionesFolclore= canciones.filter((itemCancion) => itemCancion.genero === 'Folclore')
    const cancionesJazz = canciones.filter((itemCancion) => itemCancion.genero === 'Jazz')
    const cancionesTrap= canciones.filter((itemCancion) => itemCancion.genero === 'Trap')
    const [buscando, setBuscando] = useState(false)

    const handleBuscarChange=(e)=>{
        setTerminoBusqueda(e.target.value)
        setBuscando(true)
    }
    
    const cancionesBuscadas= canciones.filter((cancion)=>cancion.titulo.toLowerCase().includes(terminoBusqueda.toLocaleLowerCase()))
    
    return (
        <>
        <div className="banner-video">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="contenedor-video"
            >
                <source src={BannerVideo} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
            </video>
        </div>
        <section className="mainSection bg-index">
            <Container className="mt-5">
                <Form>
                    <Row className="d-flex justify-content-end">
                        <Col xs="auto d-flex">
                                <i className="bi bi-search fs-3 me-2 text-secondary"></i>
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar canciones"
                                    className=" mr-sm-2"
                                    onChange={handleBuscarChange}
                                    value={terminoBusqueda}
                                />
                        </Col>
                    </Row>
                </Form>
                <Row>
                    {
                    buscando && (
                        <>
                        {cancionesBuscadas.length > 0 && cancionesBuscadas.length < canciones.length ? (
                            <>
                            <h3 className="fw-light fs-4 color-boton-cargar">Resultados de la Búsqueda</h3>
                            <hr />
                            {cancionesBuscadas.map((cancion) => (
                                <CardCancion key={cancion.id} cancion={cancion} />
                            ))}
                            <hr />
                            </>
                        ) : cancionesBuscadas.length === 0 ? (
                            <>
                            <h3 className="fw-light fs-4 color-boton-cargar">Resultados de la Búsqueda</h3>
                            <hr />
                            <p className="fw-light fs-5">No se encontraron canciones para mostrar</p>
                            <hr />
                            </>
                        ) : null}
                        </>
                    )}
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Rock</h3>
                </Row>

                <Row>
                    {
                    cancionesRock.length > 0 ? (
                    cancionesRock.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Pop</h3>
                </Row>

                <Row>
                    {
                    cancionesPop.length > 0 ? (
                    cancionesPop.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Electronica</h3>
                </Row>
                <Row>
                    {
                    cancionesElectronica.length > 0 ? (
                    cancionesElectronica.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Folclore</h3>
                </Row>

                <Row>
                    {
                    cancionesFolclore.length > 0 ? (
                    cancionesFolclore.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Jazz</h3>
                </Row>

                <Row>
                    {
                    cancionesJazz.length > 0 ? (
                    cancionesJazz.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
                <Row>
                    <h3 className="fw-light fs-3 color-secundario">Trap</h3>
                </Row>
                <Row>
                    {
                    cancionesTrap.length > 0 ? (
                    cancionesTrap.map((cancion)=><CardCancion key={cancion.id} cancion={cancion}></CardCancion>)
                    ) : (
                        <p>No se encontraron canciones para mostrar</p>
                    )
                    }
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Home;