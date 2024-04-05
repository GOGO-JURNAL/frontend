import logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const path = useLocation().pathname.split('/')[1]
    const linkStyle = (to) => {
        return `text-decoration-none text-blue mx-3 ${'/' + path === to ? 'fw-semibold' : ''}`
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white py-3 shadow rounded-bottom-3">
            <div className="container">
                <Link to={'/'} className="navbar-brand">
                    <img
                        src={logo}
                        alt=""
                        style={{ height: '50px', width: '100%' }}
                        loading="lazy"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                to={'/'}
                                className={`nav-link ${linkStyle('/')}`}>
                                Homes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/articles'}
                                className={`nav-link ${linkStyle('/articles')}`}>
                                Articles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to={'/lecturers'}
                                className={`nav-link ${linkStyle('/lecturers')}`}>
                                Lecturers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
