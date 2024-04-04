import logo from '/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const path = useLocation().pathname.split('/')[1]
    const linkStyle = (to) => {
        return `text-decoration-none text-blue mx-3 ${'/' + path === to ? 'fw-semibold' : ''}`
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white py-3 shadow rounded-bottom-5">
            <div className="container">
                <img src={logo} alt="" className="" style={{ width: '20%' }} />

                <div>
                    <Link to={'/'} className={linkStyle('/')}>
                        Home
                    </Link>
                    <Link to={'/articles'} className={linkStyle('/articles')}>
                        Articles
                    </Link>
                    <Link to={'/lecturers'} className={linkStyle('/lecturers')}>
                        Lecturers
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
