import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Auth from "../views/Auth";

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth />}
])

export default router