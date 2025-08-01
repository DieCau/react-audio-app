import { Form, Button, Container, Row, Col } from "react-bootstrap";
import EchoTuneIcono from '../../../assets/echoTune_Icono.png';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

// Componente que permite crear o editar una canción.
// Utiliza React Hook Form para manejar el formulario y validaciones.
// Recibe como props funciones para crear, buscar y editar canciones.
// Dependiendo del título, muestra un formulario para añadir o editar una canción.

const FormSong = ({crearCancion, titulo, buscarCancion, editarCancion}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const {id} = useParams()
  const navegacion = useNavigate()
  const [cargando, setCargando] = useState(true)
  
  useEffect(()=>{
    if(titulo === 'Editar Canción'){
      const cancionBuscada=buscarCancion(id)
      if(cancionBuscada === undefined){
        navegacion('*')
      }else{
        setCargando(false)
        setValue('titulo', cancionBuscada.titulo)
        setValue('artista', cancionBuscada.artista)
        setValue('album', cancionBuscada.album)
        setValue('genero', cancionBuscada.genero)
        setValue('imagen', cancionBuscada.imagen)
        setValue('duracion', cancionBuscada.duracion)
        setValue('audio', cancionBuscada.audio)
      }
    }
  },[])

  const onSubmit = (cancion) => {
    if(titulo=== 'Añadir Canción'){
      if(crearCancion(cancion) === true) {
        Swal.fire({
          title: "Cancion Creada",
          text: `La cancion ${cancion.titulo} ha sido creada con exito`,
          icon: "success"
        });
        reset();
      }
    }else{
      if(editarCancion(id, cancion)){
        Swal.fire({
          title: "Cancion Modificada",
          text: `La cancion ${cancion.titulo} ha sido modificada con exito`,
          icon: "success"
        });
      }
    }
    navegacion("/administrador")
  };

  if(cargando && titulo === 'Editar Canción'){
    return null;
  }

  return (
    <section className="Section-Login bg-index">
      <Container>
        <h1 className="display-4 mt-5 text-center">{titulo}</h1>
        <hr />
        <Row  className="pt-4 pb-5">
          <Col sm={12} md={6} lg={6}>
              <Form className="bg-dark-subtle p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Titulo de la Canción: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: Blinding Lights" 
                  {...register("titulo", {
                  required : 'El titulo de la cancion es un dato obligatorio.',
                  minLength: {
                    value: 1,
                    message: 'El titulo de la cancion debe tener al menos 3 caracteres',
                  },
                  maxLength: {
                    value: 50,
                    message: 'El titulo de la cancion debe tener como maximo 50 caracteres',
                  },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.titulo?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Artista/Grupo: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: The Weekend" 
                  {...register('artista', {
                    required : 'El artista/grupo de la cancion es un dato obligatorio.',
                    minLength: {
                    value: 1,
                    message: 'El titulo de la cancion debe tener al menos 3 caracteres',
                  },
                  maxLength: {
                    value: 50, 
                    message: 'Eltitulo de la cancion debe tener como maximo 50 caracteres',
                  },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.artista?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Album: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: After Hours" 
                  {...register('album', {
                    required : 'El album de la cancion es un dato obligatorio.',
                    minLength: {
                    value: 1,
                    message: 'El album de la cancion debe tener al menos 3 caracteres',
                  },
                  maxLength: {
                    value: 50, 
                    message: 'El album de la cancion debe tener como maximo 50 caracteres',
                  },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.album?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genero: </Form.Label>
                <Form.Select 
                  {...register('genero', {
                    required: 'El genero de la cancion es un dato obligatorio.',
                  })}
                >
                  <option value="" disabled>Seleccione el Genero de la Cancion</option>
                  <option value="Electronica">Electronica</option>
                  <option value="Folclore">Folclore</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Trap">Trap</option>
                </Form.Select>
                <Form.Text className="text-danger">
                  {errors.genero?.message}
                </Form.Text>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Imagen URL: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: https://www.pexels.com/es-es/the-weekend-blinding-lights-1230679/" 
                  {...register('imagen', {
                    required: "La url de la imagen es un dato obligatorio",
                    pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/,
                    message:
                      "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|webp)",
                  },
                  })}
                  />
                  <Form.Text className="text-danger">
                    {errors.imagen?.message}
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Duración: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: 03:45" 
                  {...register('duracion', {
                    required : 'La duración de la cancion es un dato obligatorio.',
                    minLength: {
                    value: 5,
                    message: 'La duración de la cancion debe tener al menos 5 caracteres',
                  },
                  maxLength: {
                    value: 5, 
                    message: 'La duración de la cancion debe tener como maximo 5 caracteres',
                  },
                  pattern: {
                    value:
                      /^([0-5]?[0-9]):([0-5][0-9])$/,
                    message:
                      "La duración debe ser en formato de minutos y segundos (02:30))",
                  },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.duracion?.message}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Audio URL: </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ej: https://www.spotify.com/the-weekend-blinding-lights-3456345/" 
                  {...register('audio', {
                    required: "La url del audio de la cancion es un dato obligatorio",
                    pattern: {
                    value:
                      /^(https?:\/\/)?([a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,6}))(?:[:][0-9]{1,5})?(?:\/[^\/\s]*)*\.(mp3|wav|ogg|aac|flac|m4a|wma)(?:[\?#].*)?$/,
                    message:
                      "El audio debe ser una URL directa a un archivo .mp3, .wav, .ogg, .aac, .flac, .m4a, o .wma.",
                  },
                  })}
                  />
                  <Form.Text className="text-danger">
                    {errors.audio?.message}
                  </Form.Text>
              </Form.Group>

              <div className="d-flex flex-row justify-content-center gap-3">
                <Button type="submit" variant="primary" className="my-1">
                  Guardar
                </Button>
                <Link to={"/administrador"} className="btn btn-danger my-1">
                  Cancelar
                </Link>
              </div>
            </Form>
          </Col>
          <Col md={6} lg={6} className="d-none d-md-flex align-items-md-center justify-content-md-center">
            <img src={EchoTuneIcono} alt="icono Echotune a color" className="img-fluid rounded-circle bg-dark-subtle"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FormSong;
