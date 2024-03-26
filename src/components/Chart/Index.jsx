import { useEffect, useState } from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import { getJournal, getLecturers } from '../../../services/journal'

const Charts = () => {
    const [target, setTarget] = useState(0)
    const [articles, setArticles] = useState(0)

    useEffect(() => {
        getLecturers().then((data) => setTarget(data.length))
    })

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    })
    const total =
        Number(articles.scopus) +
        Number(articles.penelitian) +
        Number(articles.pengabdian)

    return (
        <div className="w-100 px-5 d-flex gap-5">
            <div className="w-50">
                <h1 className="fw-bold fs-3 mb-3">
                    Articles Published <small className="fs-6">2022-2024</small>
                </h1>
                <div style={{ maxHeight: '100vh', height: 'auto' }}>
                    <BarChart target={target} />
                </div>
                <div className="d-flex row mt-3">
                    <div className="d-flex flex-column gap-1 col-6">
                        <div className="d-flex align-items-center">
                            <div className="legend bg-published"></div>
                            <p
                                className="mb-0 ms-2"
                                style={{ fontSize: '14px' }}>
                                Target Passed
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="legend bg-orange"></div>
                            <p
                                className="mb-0 ms-2"
                                style={{ fontSize: '14px' }}>
                                Target Not Passed
                            </p>
                        </div>
                    </div>
                    <div className="col-6" style={{ fontSize: '14px' }}>
                        <div className="d-flex row">
                            <p className="mb-0 col-6">Target</p>
                            <p className="mb-0 col-6">
                                : <b>{target}</b> Articles
                            </p>
                        </div>
                        <div className="d-flex row">
                            <p className="mb-0 col-6">Total Articles</p>
                            <p className="mb-0 col-6">
                                : <b>{total}</b> Articles
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-50" style={{ maxHeight: '100vh' }}>
                <h1 className="fw-bold fs-3 mb-3">Lecturers Has Published</h1>
                <div
                    className="w-100 d-flex justify-content-center align-items-center"
                    style={{ maxHeight: '40vh' }}>
                    <PieChart />
                </div>
                <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center">
                        <div className="legend bg-published"></div>
                        <p className="mb-0 ms-2" style={{ fontSize: '14px' }}>
                            Published
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="legend bg-notpublished"></div>
                        <p className="mb-0 ms-2" style={{ fontSize: '14px' }}>
                            Not Published
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts
