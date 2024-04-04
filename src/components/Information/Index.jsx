import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons'
import InformationMenu from './Menu'
import { useEffect, useState } from 'react'
import { getLecturers, getJournal } from '../../../services/journal'

const Information = () => {
    const [lecturers, setLecturers] = useState(0)
    const [articles, setArticles] = useState(0)

    useEffect(() => {
        getLecturers().then((data) => setLecturers(data.length))
    }, [])

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    }, [])

    const total =
        Number(articles.SCOPUS) +
        Number(articles.RISET) +
        Number(articles.PENGABDIAN)

    const iconStyle = 'visible text-blue fs-1'

    return (
        <section
            className="w-100 d-flex justify-content-center position-relative z-5 gap-5"
            style={{ bottom: '2rem' }}>
            <div className="container">
                <div className="row gap-3 gap-md-0">
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <InformationMenu
                            icon={<PeopleFill className={iconStyle} />}
                            text={'Lecturers'}
                            value={lecturers}
                        />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-start">
                        <InformationMenu
                            icon={<FileEarmarkTextFill className={iconStyle} />}
                            text={'Articles'}
                            value={total}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information
