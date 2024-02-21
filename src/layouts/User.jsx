import { Outlet } from "react-router-dom"
import { Fragment } from "react"

const User = () => {
    return (
        <Fragment>
            <div>User</div>
    
            <Outlet />
        </Fragment>
    )
}

export default User