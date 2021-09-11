import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../public/images/app-logo.svg';

const FormHeader = (props) => {
    return (
        <div>
            <div>
                <div className="app-auth-branding mb-4">
                    <a className="app-logo" href="#">
                        <Image src={logo} width={60} height={60} />
                    </a>
                </div>
                <h2 className="auth-heading text-center mb-5">{props.name} to Portal</h2>
            </div>

        </div>
    )
}

export default FormHeader
