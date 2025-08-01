import { Navigate, Outlet } from "react-router";

// Componente ProtectorAdmin que verifica si el usuario es administrador
// Si no es administrador, redirige al usuario a la página de inicio
// Si es administrador, permite el acceso a las rutas hijas
// Utiliza Navigate para redirigir y Outlet para renderizar las rutas hijas
// Este componente es útil para proteger rutas que solo deben ser accesibles por administradores
// Recibe una prop isAdmin que indica si el usuario es administrador
const ProtectorAdmin = ({isAdmin}) => {

    if(!isAdmin){
        return <Navigate to={'/'}></Navigate>
    }else {
        return <Outlet></Outlet>
    }

};

export default ProtectorAdmin;