import React, { useState, useEffect } from 'react'
import AuthLayout from '../components/layouts/AuthLayout';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
const signup = () => {

    const [isShow, setisShow] = useState(false);
    const [signupData, setsignupData] = useState({ name: '', email: '', password: '' });

    const singUp = (e) => {
        e.preventDefault();
        axios.post('/auth/signup', signupData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <>
            <Head>
                <title>SignUp</title>
            </Head>
            <div className="app app-signup p-0">
                <AuthLayout name="Sign up">
                    <div className="auth-form-container text-start mx-auto">
                        <form className="auth-form auth-signup-form" onSubmit={singUp}>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Name</label>
                                <input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name"
                                    value={signupData.name}
                                    onChange={e => setsignupData({ ...signupData, name: e.target.value })}
                                />
                            </div>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Email</label>
                                <input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email"
                                    value={signupData.email}
                                    onChange={e => setsignupData({ ...signupData, email: e.target.value })}
                                />
                            </div>
                            <div className="password mb-1">
                                <label className="sr-only" htmlFor="signup-password">Password</label>
                                <input id="signup-password" name="signup-password" type={isShow ? 'text' : 'password'}
                                    className="form-control signup-password" placeholder="Create a password"
                                    value={signupData.password}
                                    onChange={e => setsignupData({ ...signupData, password: e.target.value })}
                                />
                            </div>
                            <div className="extra mb-3">

                                <div className="forgot-password text-end" style={{ cursor: 'pointer' }}>
                                    <a onClick={() => setisShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</a>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                            </div>
                        </form>
                        <div className="auth-option text-center pt-5">Already have an account? <Link href="/login"><a className="text-link">Log in</a></Link></div>
                    </div>

                </AuthLayout>
            </div>
        </>
    )
}

export default signup
