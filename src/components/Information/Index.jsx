import { FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons'
import InformationMenu from './Menu'

const Information = () => {
    const iconStyle = 'visible text-blue fs-1'

    return (
        <section
            className="w-100 d-flex justify-content-center position-relative z-5 gap-5"
            style={{ bottom: '2rem' }}>
            <InformationMenu
                icon={<PeopleFill className={iconStyle} />}
                text="Lecturers"
                value={10}
            />
            <InformationMenu
                icon={<FileEarmarkTextFill className={iconStyle} />}
                text="Articles"
                value={100}
            />
        </section>
    )
}

export default Information
