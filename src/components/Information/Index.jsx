import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons'
import InformationMenu from './Menu'
import { useEffect, useState } from 'react'
import { getLecturers, getJournal } from '../../../services/journal'

const Information = () => {
    const [lecturers, setLecturers] = useState(0)
    const [articles, setArticles] = useState(0)

    useEffect(() => {
        getLecturers().then((data) => setLecturers(data.length))
    })

    useEffect(() => {
        getJournal().then((data) => setArticles(data))
    })
    const total =
        Number(articles.scopus) +
        Number(articles.penelitian) +
        Number(articles.pengabdian)

    const iconStyle = 'visible text-blue fs-1'

    return (
        <section
            className="w-100 d-flex justify-content-center position-relative z-5 gap-5"
            style={{ bottom: '2rem' }}>
            <InformationMenu
                icon={<PeopleFill className={iconStyle} />}
                text="Lecturers"
                value={lecturers}
            />
            <InformationMenu
                icon={<FileEarmarkTextFill className={iconStyle} />}
                text="Articles"
                value={total}
            />
        </section>
    )
}

export default Information
