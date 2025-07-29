import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemSong = ({cancion, fila, borrarCancion}) => {

  const eliminarCancion = () => {
    Swal.fire({
      title: "¿Eliminar Cancion?",
      text: "Este paso no se puede revertir.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#4d4b4a",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
    if (result.isConfirmed) {
      if (borrarCancion(cancion.id)) {
        Swal.fire({
          title: "Cancion eliminada.",
          text: `La cancion ${cancion.titulo} fue eliminada con éxito.`,
          icon: "success"
        });
      }
      else {
        Swal.fire({
          title: "Ocurrio un error.",
          text: `La cancion ${cancion.titulo} no pudo ser eliminada.`,
          icon: "error"
        });
      }
    }
    });
  }

    return (
    <tr>
      <td className="text-center align-middle">{fila}</td>
      <td className="align-middle">{cancion.titulo}</td>
      <td className="text-center align-middle">{cancion.artista}</td>
      <td className="text-center align-middle">{cancion.genero}</td>
      <td className="text-center">
        <img
          src={cancion.imagen}
          className="img-tabla "
          alt={cancion.titulo}
        ></img>
      </td>
      <td className="text-center align-middle">
        <Link className="me-lg-2 btn btn-outline-warning" to={'/administrador/editar/'+cancion.id}>
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="outline-danger" onClick={eliminarCancion}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
    );
};

export default ItemSong;