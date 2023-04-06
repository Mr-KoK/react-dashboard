import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import ErrorPage from "../pages/error-page";
import App from "../App";
import PrivateRoute from "./private-route";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { api } from "../api/requestApi";
import { useContext } from "react";
import { AuthContxt } from "../providers/auth-provider";

const routes = [
    {
        element: <App />,
        path: "/",
        errorElement: <ErrorPage />,
        id:"app",
        loader: async () => {
            return await api.get();
        },
        children: [
            {
                path: "/",
                element:
                    <PrivateRoute >
                        <Dashboard />
                    </PrivateRoute>
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
]

export default createBrowserRouter(routes);

