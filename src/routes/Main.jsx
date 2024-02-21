import { createBrowserRouter } from 'react-router-dom';
import User from '../layouts/User';
import Admin from '../layouts/Admin';
import Home from '../pages/User/Home';
import Dashboard from '../pages/Admin/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <User />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },
    {
        path: 'admin',
        element: <Admin />,
        children: [
            {
                path: '',
                element: <Dashboard />
            }
        ]
    }
]);
