import { createBrowserRouter } from 'react-router-dom'
import User from '../layouts/User'
import Admin from '../layouts/Admin'
import Home from '../pages/User/Home'
import Dashboard from '../pages/Admin/Dashboard'
import LecturerDetail from '../pages/User/LecturerDetail'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <User />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'lecturer/:id',
                element: <LecturerDetail />,
            },
        ],
    },
    {
        path: 'admin',
        element: <Admin />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
        ],
    },
])
