import { useEffect, useState } from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import { getJournal, getLecturers } from '../../../services/journal'

const Charts = () => {
    const [lecturers, setLecturers] = useState([])
    const [articles, setArticles] = useState([])
    const [filter, setFilter] = useState('RISET')

    useEffect(() => {
        getLecturers().then((data) => setLecturers(data))
    }, [])

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    }, [])

    if (!lecturers || !articles) {
        return <div>Loading...</div>
    }

    const total =
        Number(articles.SCOPUS) +
        Number(articles.RISET) +
        Number(articles.PENGABDIAN)

    return (
        <div className="w-100 px-5 pb-5 d-flex gap-5 border-bottom border-5">
            <div className="container">
                <div className="row justify-content-center align-items-center gap-5 gap-md-0">
                    <div className="col-md-6">
                        <h1 className="fw-bold fs-3 mb-0">
                            Articles Published
                        </h1>
                        <small className="fs-6">2022-2024</small>
                        <div
                            className="mt-4 mb-4"
                            style={{ maxHeight: '100vh', height: '300px' }}>
                            <BarChart
                                target={
                                    isNaN(lecturers.length)
                                        ? 0
                                        : lecturers.length
                                }
                                datas={articles}
                            />
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
                                        :{' '}
                                        <span className="fw-bold">
                                            {lecturers.length}
                                        </span>{' '}
                                        Articles
                                    </p>
                                </div>
                                <div className="d-flex row">
                                    <p className="mb-0 col-6">Total Articles</p>
                                    <p className="mb-0 col-6">
                                        :{' '}
                                        <span className="fw-bold">
                                            {Number(total)}
                                        </span>{' '}
                                        Articles
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="fw-bold fs-3 mb-1">
                            Lecturers Has Published
                        </h1>
                        <div className="mt-2 mb-3 d-flex justify-content-center gap-2">
                            <button
                                className={`btn ${filter === 'RISET' ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setFilter('RISET')}>
                                Riset
                            </button>
                            <button
                                className={`btn ${filter === 'PENGABDIAN' ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => setFilter('PENGABDIAN')}>
                                Pengabdian
                            </button>
                        </div>
                        <div
                            className="w-100 d-flex justify-content-center align-items-center"
                            style={{ maxHeight: '100vh', height: '300px' }}>
                            <PieChart value={filter} lecturers={lecturers} />
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <div className="d-flex align-items-center">
                                <div className="legend bg-published"></div>
                                <p
                                    className="mb-0 ms-2"
                                    style={{ fontSize: '14px' }}>
                                    Published
                                </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="legend bg-notpublished"></div>
                                <p
                                    className="mb-0 ms-2"
                                    style={{ fontSize: '14px' }}>
                                    Not Published
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts
