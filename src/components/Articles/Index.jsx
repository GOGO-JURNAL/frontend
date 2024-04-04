import {
    Calendar,
    ChatRightTextFill,
    FileEarmarkTextFill,
} from 'react-bootstrap-icons'
import PropTypes from 'prop-types'

const Articles = (props) => {
    const { title, publication, year, cite } = props

    const fontSize = { fontSize: '13px' }
    return (
        <div className="mt-4">
            <div className="mt-3">
                <h5 className="fw-bold fs-6">{title}</h5>
                <div className="fs-6">
                    <div className="d-flex row align-items-start">
                        <div
                            className="text-danger d-flex align-items-center col-8 gap-1"
                            style={fontSize}>
                            <FileEarmarkTextFill />
                            <p className="mb-0">{publication}</p>
                        </div>
                    </div>
                    <div className="d-flex row">
                        <div
                            className="text-secondary d-flex align-items-center col-3 gap-1"
                            style={fontSize}>
                            <Calendar />
                            <p className="mb-0">{year}</p>
                        </div>
                        <div
                            className="text-info d-flex align-items-center col-6 gap-1"
                            style={fontSize}>
                            <ChatRightTextFill />
                            <p className="mb-0">{cite > 0 ? cite : 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Articles.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    publication: PropTypes.string,
    year: PropTypes.string,
    cite: PropTypes.number,
}

export default Articles
