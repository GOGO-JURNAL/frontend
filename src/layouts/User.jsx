import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Index'

const User = () => {
    return (
        <div
            className="mx-auto w-100 bg-light min-vh-100"
            style={{ maxWidth: '1480px' }}>
            <Navbar />

            <main className="container bg-white rounded-5 overflow-hidden mt-3 p-0 pb-5 shadow mb-5">
                <Outlet />
            </main>
        </div>
    )
}

export default User
