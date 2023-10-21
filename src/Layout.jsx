import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './css/style.css';

function Layout() {
    return (

        <div className="container-fluid layout-body  d-flex justify-content-center ">
            <div className="row">
                <div className="col-md-6  d-flex justify-content-center flex-column gap-4">
                    <Link to="/registration">
                        <button className="btn">რეგისტრაცია</button>
                    </Link>

                    <Link to="/authorization">
                        <button className="btn">ავტორიზაცია</button>
                    </Link>
                </div>
            </div>

            <Outlet />
        </div>

    );
}

export default Layout;









