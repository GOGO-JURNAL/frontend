import { useEffect, useState } from 'react'
import { getLecturers } from '../../../services/journal'
import Menu from './Menu'
import Loading from '../LoadingScreen/Index'

const Lecturers = () => {
    const [Lecturers, setLecturers] = useState([])

    useEffect(() => {
        getLecturers()
            .then((data) => setLecturers(data))
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (!Lecturers) {
        return <Loading />
    }

    return (
        <div className="mt-5 px-5">
            <h3 className="fw-bold">All Lecturers</h3>

            <div className="mt-3 d-flex flex-column gap-3">
                {Lecturers.map((lecturer) => (
                    <Menu
                        key={lecturer.id}
                        name={lecturer.name}
                        idSinta={lecturer.sinta_id}
                        id={lecturer.id}
                        articles={lecturer.Jurnal.length}
                    />
                ))}
            </div>
        </div>
    )
}

export default Lecturers
