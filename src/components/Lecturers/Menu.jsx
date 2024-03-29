import { FileEarmarkTextFill, PersonFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Menu = (props) => {
    const { id, name, idSinta, articles } = props

    return (
        <div className="d-flex gap-3 w-100 px-1">
            <div
                className="d-flex justify-content-center align-items-center bg-notpublished rounded-3"
                style={{ width: '80px', height: '80px' }}>
                <PersonFill className="fs-1 text-blue" />
            </div>
            <div className="d-flex justify-content-between w-100">
                <div className="d-flex flex-column justify-content-between h-100 pt-1 pb-1">
                    <h4 className="fw-bold mb-0 text-capitalize">{name}</h4>
                    <div className="d-flex jutify-content-around gap-4">
                        <p className="text-muted mt-0 mb-0 fs-6">
                            ID : {idSinta}
                        </p>
                        <div className="d-flex align-items-center text-danger fs-6 gap-1">
                            <FileEarmarkTextFill />
                            <p className="mb-0">{articles} Articles</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <Link
                        to={`/lecturers/${id}`}
                        className="btn btn-outline-primary">
                        Lihat Detail
                    </Link>
                </div>
            </div>
        </div>
    )
}

Menu.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    idSinta: PropTypes.string,
    articles: PropTypes.string,
}

export default Menu
