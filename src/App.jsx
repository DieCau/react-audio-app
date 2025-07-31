import { BrowserRouter, Route, Routes } from "react-router";
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import DetalleCancion from "./components/pages/DetalleCancion";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import Nosotros from "./components/pages/Nosotros";
import FormularioCancion from "./components/pages/cancion/FormularioCancion";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import { useEffect, useState } from "react";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const cancionesLocalStorage = JSON.parse(localStorage.getItem('catalogoCanciones')) || []
  const [canciones, setCanciones] = useState(cancionesLocalStorage)
  const administradorLogueado = sessionStorage.getItem('userAdmin') || false;
  const [usuarioAdmin, setUsuarioAdmin] = useState(administradorLogueado)

  useEffect(()=>{
    localStorage.setItem('catalogoCanciones', JSON.stringify(canciones))
  }, [canciones])

  const crearCancion = (cancionNueva) => {
    cancionNueva.id = uuidv4()
    setCanciones([...canciones, cancionNueva])
    return true
  }

  const buscarCancion = (idCancion)=>{
    const cancionBuscada = canciones.find((cancion)=>cancion.id === idCancion)
    return cancionBuscada
  }

  const editarCancion=(idCancion, cancionActualizada)=>{
    const cancionEditada = canciones.map((itemCancion)=>{
      if(itemCancion.id === idCancion){
        return {
          ...itemCancion,
          ...cancionActualizada
        }
      }else{
        return itemCancion
      }
    })
    setCanciones(cancionEditada)
    return true
  }

  const borrarCancion = (idCancion) => {
    const cancionesFiltradas = canciones.filter((itemCancion) => itemCancion.id !== idCancion)
    setCanciones(cancionesFiltradas)
    return true
  } 

  return (
    <>
    <BrowserRouter>
      <Menu usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio canciones={canciones}></Inicio>}></Route>
          <Route path="/detalle/:id" element={<DetalleCancion buscarCancion={buscarCancion}></DetalleCancion>}></Route>
          <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
          <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
            <Route index element={<Administrador setCanciones={setCanciones} canciones={canciones} borrarCancion={borrarCancion}></Administrador>}></Route>
            <Route path="crear" element={<FormularioCancion titulo={'Añadir Canción'} crearCancion={crearCancion}></FormularioCancion>}></Route>
            <Route path="editar/:id" element={<FormularioCancion titulo={'Editar Canción'} buscarCancion={buscarCancion} editarCancion={editarCancion}></FormularioCancion>}></Route>
          </Route>
          <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
