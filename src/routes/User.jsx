import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/User/Home";

export const userRouter = createBrowserRouter ([
    {
        path: '',
        element: <Home />
    }
])