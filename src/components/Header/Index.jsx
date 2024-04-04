import univLogo from '/assets/logo-univ.png'

const Header = (props) => {
    const {
        name = 'Sistem Informasi',
        description = 'Universitas Muhammadiyah Jember',
    } = props

    return (
        <header className="hero d-flex flex-column justify-content-center align-items-center">
            <img
                src={univLogo}
                alt=""
                className="img-fluid"
                style={{ width: '13%' }}
            />
            <div className="text-center mt-3">
                <h1 className="text-white fw-bold mb-0">{name}</h1>
                <p className="text-white" style={{ letterSpacing: '.1rem' }}>
                    {description}
                </p>
            </div>
        </header>
    )
}

export default Header
