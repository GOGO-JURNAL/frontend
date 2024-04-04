import PropTypes from 'prop-types'

const InformationMenu = (props) => {
    let { icon, text, value } = props

    if (!value) {
        value = 0
    }

    return (
        <aside className="d-flex justify-content-between align-items-center bg-white rounded-2 px-4 py-3 shadow w-25">
            {icon}
            <div className="text-blue text-end">
                <h6 className="mb-0 fw-normal">{text}</h6>
                <h1 className="fw-bold mb-0">{value}</h1>
            </div>
        </aside>
    )
}

InformationMenu.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
    value: PropTypes.number,
}

export default InformationMenu
