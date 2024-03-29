import { useParams } from 'react-router-dom'
import { getLecturers } from '../../../services/journal'
import Articles from '../../components/Articles/Index'
import Header from '../../components/Header/Index'
import { useEffect, useState } from 'react'

const LecturerDetail = () => {
    const [lecturer, setLecturer] = useState([])
    const lecturerId = useParams().id

    useEffect(() => {
        getLecturers().then((data) => setLecturer(data))
    }, [])

    if (!lecturer) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {lecturer
                .filter((lecturer) => lecturer.id === lecturerId)
                .map((item) => (
                    <Header
                        key={item.id}
                        name={item.name}
                        description={item.sinta_id}
                    />
                ))}
            <Articles id={lecturerId} />
        </div>
    )
}

export default LecturerDetail
