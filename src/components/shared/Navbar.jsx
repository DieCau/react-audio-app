import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoNav from "../../assets/echoTune_Logo-negativo.png";
import { NavLink, Link, useNavigate} from "react-router";
import { Button } from "react-bootstrap";

function Menu({ usuarioAdmin, setUsuarioAdmin }) {

  const navegacion = useNavigate()

  const cerrarSesion = ()=>{
    setUsuarioAdmin(false)
    sessionStorage.removeItem('userAdmin')
    navegacion('/')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={LogoNav}
            alt="Logo EchoTune"
            className="logo-nav img-fluid"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <NavLink to={"/"} className="nav-link">
              Inicio
            </NavLink>
            {usuarioAdmin ? (
              <>
                <NavLink to={"/administrador"} className="nav-link">
                  Administrador
                </NavLink>
                <div className="d-flex align-items-start">
                    <Button variant="outline-none" className="nav-link" onClick={cerrarSesion}>Cerrar Sesión</Button>
                </div>
                <NavLink to={"/nosotros"} className="nav-link">
                  Nosotros
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to={"/login"} className="nav-link">
                  Iniciar Sesion
                </NavLink>
                <NavLink to={"/nosotros"} className="nav-link">
                Nosotros
                </NavLink>
                <NavLink to={"/*"} className="nav-link">
                  Registrarse
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
