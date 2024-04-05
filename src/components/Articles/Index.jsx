import { useEffect, useState } from 'react'
import {
    Calendar,
    ChatRightTextFill,
    FileEarmarkTextFill,
    PersonFill,
} from 'react-bootstrap-icons'
import { getLecturers } from '../../../services/journal'

const Articles = (props) => {
    const { title, publication, year, cite, author_id } = props
    const [author, setAuthor] = useState({})

    if (author_id) {
        useEffect(() => {
            getLecturers().then((data) => {
                setAuthor(data.find((item) => item.id === author_id))
            })
        }, [])
    }

    const fontSize = { fontSize: '13px' }
    return (
        <div className="mt-4">
            <div className="mt-3">
                <h5 className="fw-bold fs-6">{title}</h5>
                <div className="fs-6">
                    <div className="d-flex row align-items-start">
                        <div
                            className="text-danger d-flex align-items-center col-12 gap-1"
                            style={fontSize}>
                            <FileEarmarkTextFill />
                            <p className="mb-0">{publication}</p>
                        </div>
                    </div>
                    <div className="d-flex row">
                        {author_id ? (
                            <div
                                className="text-blue d-flex align-items-center
                            col-8 gap-1"
                                style={fontSize}>
                                <PersonFill />
                                <p className="mb-0">{author.name}</p>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div
                            className="text-secondary d-flex align-items-center col-2 gap-1"
                            style={fontSize}>
                            <Calendar />
                            <p className="mb-0">{year}</p>
                        </div>
                        <div
                            className="text-info d-flex align-items-center col-2 gap-1"
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

export default Articles
