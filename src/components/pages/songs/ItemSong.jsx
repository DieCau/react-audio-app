import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

// Componente que muestra una fila con la información de una canción en una tabla.
// Recibe como props un objeto "cancion", el número de fila y una función para borrar la canción.
// Muestra el título, artista, género, imagen y botones para editar y eliminar la canción.
// Al hacer clic en el botón de eliminar, muestra una alerta de confirmación antes de proceder con la eliminación.
// Si la canción se elimina correctamente, muestra una alerta de éxito.
// Si ocurre un error al eliminar, muestra una alerta de error.
// El botón de editar redirige a la página de edición de la canción.
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