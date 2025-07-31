import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import DetalleCancion from "./components/pages/DetalleCancion";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import About from "./components/pages/About";
import FormSong from "./components/pages/songs/FormSong";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
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
      <Nabvar usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Nabvar>
      <main>
        <Routes>
          <Route path="/" element={<Home canciones={canciones}></Home>}></Route>
          <Route path="/detalle/:id" element={<DetalleCancion buscarCancion={buscarCancion}></DetalleCancion>}></Route>
          <Route path="/login" element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}></Route>
          <Route path="/administrador" element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}>
            <Route index element={<Administrador setCanciones={setCanciones} canciones={canciones} borrarCancion={borrarCancion}></Administrador>}></Route>
            <Route path="crear" element={<FormSong titulo={'Añadir Canción'} crearCancion={crearCancion}></FormSong>}></Route>
            <Route path="editar/:id" element={<FormSong titulo={'Editar Canción'} buscarCancion={buscarCancion} editarCancion={editarCancion}></FormSong>}></Route>
          </Route>
          <Route path="/nosotros" element={<About></About>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
