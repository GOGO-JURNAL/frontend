import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Index';

const User = () => {
    return (
        <div className="bg-blue-50 h-">
            <Navbar />

            <Outlet />
        </div>
    );
};

export default User;
