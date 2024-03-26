import {
    Calendar,
    ChatRightTextFill,
    FileEarmarkTextFill,
    PersonFill,
} from 'react-bootstrap-icons'

const Articles = () => {
    return (
        <div className="mt-5 px-5">
            <h3 className="fw-bold">Artikel</h3>

            <div className="mt-3">
                <div>
                    <h5 className="fw-bold">Judul Artikel</h5>
                    <div>
                        <div className="d-flex row">
                            <div className="text-primary d-flex align-items-center col-6 gap-3">
                                <PersonFill />
                                <p className="mb-0">Penulis</p>
                            </div>
                            <div className="text-danger d-flex align-items-center col-6 gap-3">
                                <FileEarmarkTextFill />
                                <p className="mb-0">Jurnal</p>
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="text-secondary d-flex align-items-center col-3 gap-3">
                                <Calendar />
                                <p className="mb-0">2022</p>
                            </div>
                            <div className="text-info d-flex align-items-center col-6 gap-3">
                                <ChatRightTextFill />
                                <p className="mb-0">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
