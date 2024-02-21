import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Index';
import Footer from '../components/Footer/Index';

const User = () => {
    return (
        <div className="bg-blue-50 min-h-screen">
            <Navbar />
            
            <main className='m-5 lg:mx-20 lg:my-10 bg-white rounded-2xl'>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default User;
