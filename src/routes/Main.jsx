import { createBrowserRouter } from 'react-router-dom'
import User from '../layouts/User'
import Admin from '../layouts/Admin'
import Dashboard from '../pages/Admin/Dashboard'
import HomePage from '../pages/User/Home'
import ArticlesPage from '../pages/User/Articles'
import LecturersPage from '../pages/User/Lecturers'
import LecturerDetailPage from '../pages/User/LecturerDetail'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <User />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'articles',
                element: <ArticlesPage />,
            },
            {
                path: 'lecturers',
                element: <LecturersPage />,
            },
            {
                path: 'lecturers/:id',
                element: <LecturerDetailPage />,
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
