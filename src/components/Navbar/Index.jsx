import logo from '/logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow rounded-bottom-5">
            <div className="container">
                <img src={logo} alt="" className="" style={{ width: '20%' }} />
            </div>
        </nav>
    )
}

export default Navbar
