import { Button, Table, Form, Row, Col } from "react-bootstrap";
import ItemCancion from "./cancion/ItemCancion";
import { cancionesData } from "../../data/cancionesPrueba";
import { Link } from "react-router";
import { useState } from "react";

const Administrador = ({ setCanciones, canciones, borrarCancion }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const cancionesBuscadas = canciones.filter((cancion) =>
    cancion.titulo.toLowerCase().includes(terminoBusqueda.toLocaleLowerCase())
  );
  const cargarCancionesPrueba = () => {
    setCanciones(cancionesData);
  };

  const handleBuscarChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  return (
    <>
      <section className="bg-index mt-5">
        <h1 className="fw-light text-center">Lista de Canciones</h1>
        <div className="container">
          <div className="d-flex justify-content-between">
            <Form>
              <Row className="d-flex justify-content-start">
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
            <div className="d-flex flex-row align-items-center">
              <Link
                variant="outline-none"
                to={"/administrador/crear"}
                className="botones-administrador"
              >
                <i className="bi bi-plus-circle fs-2 color-secundario"></i>
              </Link>
              {canciones.length > 0 ? (
                <Button
                  variant="link"
                  className="botones-administrador"
                  onClick={cargarCancionesPrueba}
                  disabled
                >
                  <i className="bi bi-database-add fs-2 color-boton-cargar"></i>
                </Button>
              ) : (
                <Button
                  variant="link"
                  className="botones-administrador"
                  onClick={cargarCancionesPrueba}
                >
                  <i className="bi bi-database-add fs-2 color-boton-cargar"></i>
                </Button>
              )}
            </div>
          </div>
          <Table className="container mb-5" responsive striped bordered hover>
            <thead>
              <tr className="text-center">
                <th className="fw-light fs-5">#</th>
                <th className="fw-light fs-5">Titulo de la Canción</th>
                <th className="fw-light fs-5">Artista/Grupo</th>
                <th className="fw-light fs-5">Genero</th>
                <th className="fw-light fs-5">Imagen</th>
                <th className="fw-light fs-5">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {cancionesBuscadas.length > 0 ? (
                cancionesBuscadas.map((cancion, indice) => (
                  <ItemCancion
                    key={cancion.id}
                    cancion={cancion}
                    fila={indice + 1}
                    borrarCancion={borrarCancion}
                  ></ItemCancion>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No se encontraron canciones para mostrar
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default Administrador;
