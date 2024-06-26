import { FileEarmarkTextFill, PersonFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Menu = (props) => {
    const { id, name, idSinta, articles } = props

    return (
        <Link
            to={`/lecturers/${id}`}
            className="d-flex gap-3 w-100 px-1 text-decoration-none">
            <div
                className="d-flex justify-content-center align-items-center bg-notpublished rounded-3"
                style={{ width: '70px', height: '70px' }}>
                <PersonFill className="fs-1 text-blue" />
            </div>
            <div className="d-flex row w-100">
                <div className="d-flex flex-column justify-content-between h-100 pt-1 pb-1 col-10">
                    <h4 className="fw-bold mb-0 text-blue fs-6">{name}</h4>
                    <div className="row w-auto">
                        <p className="text-muted mt-0 mb-0 fs-6 col-md-4">
                            ID : {idSinta}
                        </p>
                        <div className="d-flex align-items-center text-danger fs-6 gap-1 col-md-8 w-auto">
                            <FileEarmarkTextFill />
                            <p className="mb-0">{articles} Articles</p>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-flex align-items-center justify-content-end col-2 ">
                    <Link
                        to={`/lecturers/${id}`}
                        className="btn btn-outline-primary">
                        Lihat Detail
                    </Link>
                </div>
            </div>
        </Link>
    )
}

export default Menu
