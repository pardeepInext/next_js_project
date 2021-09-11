import React from 'react'
import FormHeader from '../auth/FormHeader';
const AuthTemplate = (props) => {

    return (
        <div className="row g-0 app-auth-wrapper">
            <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                <div className="d-flex flex-column align-content-end">
                    <div className="app-auth-body mx-auto">
                        <FormHeader name={props.name} />
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder">
                </div>
                <div className="auth-background-mask" />
                <div className="auth-background-overlay p-3 p-lg-5">
                    <div className="d-flex flex-column align-content-end h-100">
                        <div className="h-100" />
                        <div className="overlay-content p-3 p-lg-4 rounded">
                            <h5 className="mb-3 overlay-title">Explore Portal Admin Template</h5>
                            <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license .</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthTemplate
