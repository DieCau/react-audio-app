import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

// Componente de error 404

const error404 = () => {
  return (
      <Container className="d-flex flex-column justify-content-center text-center min-vh-100">
        <Row>
          <Col>
            <h1 className="display-1 fw-bold mb-2 text-">404 Not Found...</h1>
            <p className="fs-3">
              <span className="text-secondary">¡Oops! Página no encontrada.</span>
            </p>
            <Button as={Link} to="/" variant="secondary" size="lg">
              Volver al Home
            </Button>
          </Col>
        </Row>
      </Container>
  );
};

export default error404;