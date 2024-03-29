import { useEffect, useState } from 'react'
import {
    Calendar,
    ChatRightTextFill,
    FileEarmarkTextFill,
    PersonFill,
} from 'react-bootstrap-icons'
import { getLecturers } from '../../../services/journal'
import PropTypes from 'prop-types'

const Articles = (props) => {
    const { id } = props
    const [articles, setArticles] = useState(null)

    useEffect(() => {
        getLecturers().then((data) => setArticles(data))
    }, [])

    if (!articles) {
        return <div>Loading...</div>
    }

    let data = []
    articles.forEach((item) => {
        if (item.id === id) {
            item.Jurnal.forEach((jurnal) => {
                data.push({
                    title: jurnal.title,
                    publication: jurnal.publication,
                    year: jurnal.year,
                    cite: jurnal.cite,
                    author: item.name,
                })
            })
        }
    })

    const fontSize = { fontSize: '13px' }
    return (
        <div className="mt-5 px-5">
            <h3 className="fw-bold">Articles</h3>

            <div className="mt-3 row gap-4">
                {data.length === 0 ? (
                    <p className="text-center text-danger fw-bold">
                        No articles
                    </p>
                ) : (
                    data.map((item, index) => (
                        <div key={index} className="">
                            <h5 className="fw-bold fs-6">{item.title}</h5>
                            <div className="fs-6">
                                <div className="d-flex row align-items-start">
                                    <div
                                        className="text-primary d-flex align-items-center col-4 gap-1"
                                        style={fontSize}>
                                        <PersonFill />
                                        <p className="mb-0">{item.author}</p>
                                    </div>
                                    <div
                                        className="text-danger d-flex align-items-center col-8 gap-1"
                                        style={fontSize}>
                                        <FileEarmarkTextFill />
                                        <p className="mb-0">
                                            {item.publication}
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex row">
                                    <div
                                        className="text-secondary d-flex align-items-center col-3 gap-1"
                                        style={fontSize}>
                                        <Calendar />
                                        <p className="mb-0">{item.year}</p>
                                    </div>
                                    <div
                                        className="text-info d-flex align-items-center col-6 gap-1"
                                        style={fontSize}>
                                        <ChatRightTextFill />
                                        <p className="mb-0">
                                            {item.cite > 0 ? item.cite : 0}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

Articles.propTypes = {
    id: PropTypes.string,
}

export default Articles
