import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({isAdmin}) => {

    if(!isAdmin){
        return <Navigate to={'/'}></Navigate>
    }else {
        return <Outlet></Outlet>
    }

};

export default ProtectorAdmin;