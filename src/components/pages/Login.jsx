import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router";
import ImgLogin from '../../assets/echoTune_Logo-negativo.png'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// Componente de la página de Login
// Permite iniciar sesión como administrador

const Login = ({setUsuarioAdmin}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate()

  const iniciarSesion=(usuario)=>{
    if(usuario.email === import.meta.env.VITE_API_EMAIL && usuario.password === import.meta.env.VITE_API_PASSWORD){
      setUsuarioAdmin(true)
      sessionStorage.setItem('userAdmin', true)
      navegacion('/administrador')
    }else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrectos.",
      });
      reset();
    }
  }
  return (
    <section className="Section-Login bg-index">
      <Container className="py-4">
        <div className="d-flex flex-column align-items-center">
          <img src={ImgLogin} alt="logo echotune" className="logo-login"/>
          <h1 className="text-center mt-3">Iniciar Sesion</h1>
        </div>
        <Row className="d-flex flex-column align-items-center">
          <Col xs={12} sm={10} md={6} lg={5} >
            <Form className="bg-dark-subtle p-4 rounded my-4" onSubmit={handleSubmit(iniciarSesion)}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ej: juanperez@mail.com"{...register('email', {
                  required:'El email es obligatorio',
                  pattern:{
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'El email debe tener un formato valido'
                  }
                  })}/>
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña"{...register('password', {
                  required: 'La contraseña es obligatoria',
                  pattern: {
                  value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message: 'La contraseña debe tener entre 8 y 16 caracteres, una letra minúscula, una letra mayúscula un caracter numerico y un caracter especial como minimo.' 
                  }
                })}/>
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="div-button d-flex flex-column align-items-center pt-3 pb-2">
                <Button variant="primary" type="submit" className="mb-3">
                  Ingresar
                </Button>
                <Link to={"*"}>¿Olvidaste tu contraseña?</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;