import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/User/Home";

export const adminRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Home />
    }
])