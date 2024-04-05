import { useParams } from 'react-router-dom'
import { getDetailLecturers } from '../../../services/journal'
import Articles from '../../components/Articles/Index'
import Header from '../../components/Header/Index'
import { useEffect, useState } from 'react'

const LecturerDetailPage = () => {
    const [lecturer, setLecturer] = useState([])
    const lecturerId = useParams().id

    useEffect(() => {
        getDetailLecturers(lecturerId).then((data) => setLecturer(data))
    }, [lecturerId])

    if (!lecturer.Jurnal) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Header
                key={lecturer.id}
                name={lecturer.name}
                description={lecturer.sinta_id}
            />

            <main className="w-100 px-5 mt-5">
                <h1 className="fw-bold fs-3 mb-0">Articles</h1>
                <div>
                    {lecturer.Jurnal && lecturer.Jurnal.length > 0 ? (
                        lecturer.Jurnal.sort((a, b) => b.cite - a.cite)
                            .sort((a, b) => new Date(b.year) - new Date(a.year))
                            .map((data, index) => (
                                <Articles
                                    key={index}
                                    title={data.title}
                                    publication={data.publication}
                                    year={data.year}
                                    cite={data.cite}
                                />
                            ))
                    ) : (
                        <div className="text-center mt-5">
                            <p className="text-muted fs-5">
                                This lecturer has no article
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default LecturerDetailPage
