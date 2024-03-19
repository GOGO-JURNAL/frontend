import BarChart from './BarChart'
import PieChart from './PieChart'

const Charts = () => {
    return (
        <div className="w-100 px-5 d-flex gap-5">
            <div className="w-50">
                <h1 className="fw-bold fs-3 mb-3">
                    Articles Published <small className="fs-6">2022-2024</small>
                </h1>
                <div style={{ maxHeight: '100vh' }}>
                    <BarChart />
                </div>
                <div className="d-flex flex-column gap-1">
                    <div className="d-flex align-items-center">
                        <div className="legend bg-published"></div>
                        <p className="mb-0 ms-2" style={{ fontSize: '14px' }}>
                            Target Passed
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="legend bg-orange"></div>
                        <p className="mb-0 ms-2" style={{ fontSize: '14px' }}>
                            Target Not Passed
                        </p>
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
