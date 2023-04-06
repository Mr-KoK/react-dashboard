import { useContext } from "react"
import { Navigate, useRouteLoaderData } from "react-router-dom";
import { AuthContxt } from "../App";
import Login from "../pages/auth/Login";
import Nav from "../layouts/Nav";


export default function PrivateRoute({children}) {
    const { isAuthed, setAuth } = useContext(AuthContxt);
    
    if (!isAuthed) {
        return <Navigate to="/login" replace />;
    }
    return children;
}