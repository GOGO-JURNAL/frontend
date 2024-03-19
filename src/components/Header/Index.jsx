import univLogo from '/assets/logo-univ.png'

const Header = () => {
    return (
        <header className="hero d-flex flex-column justify-content-center align-items-center">
            <img
                src={univLogo}
                alt=""
                className="img-fluid"
                style={{ width: '13%' }}
            />
            <div className="text-center mt-3">
                <h1 className="text-white fw-bold mb-0">Sistem Informasi</h1>
                <p className="text-white" style={{ letterSpacing: '.1rem' }}>
                    Universitas Muhammadiyah Jember
                </p>
            </div>
        </header>
    )
}

export default Header
