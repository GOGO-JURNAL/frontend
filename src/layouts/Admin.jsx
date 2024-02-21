import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <Fragment>
            <div>Admin</div>

            <Outlet />
        </Fragment>
    );
};

export default Admin;
