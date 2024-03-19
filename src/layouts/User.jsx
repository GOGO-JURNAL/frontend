import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Index'

const User = () => {
    return (
        <div className="mx-auto w-100 bg-light" style={{ maxWidth: '1480px' }}>
            <Navbar />

            <main className="">
                <Outlet />
            </main>
        </div>
    )
}

export default User
