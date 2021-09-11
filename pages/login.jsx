import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AuthLayout from '../components/layouts/AuthLayout';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const login = () => {

    const [loginData, setloginData] = useState({ email: '', password: '' });
    const [isShow, setisShow] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const login = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.get('http://127.0.0.1:8002/api/login', {
            params: loginData
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));


    }



    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="app app-login p-0">
                <AuthLayout name="Login">
                    <div className="auth-form-container text-start">
                        <form className="auth-form login-form" onSubmit={login}>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signin-email">Email</label>
                                <input id="signin-email" name="signin-email" type="email" className="form-control signin-email" placeholder="Email address"
                                    value={loginData.email}
                                    onChange={e => setloginData({ ...loginData, email: e.target.value })}
                                />
                            </div>
                            <div className="password mb-3">
                                <label className="sr-only" htmlFor="signin-password">Password</label>
                                <input id="signin-password" name="signin-password" type={isShow ? 'text' : 'password'}
                                    className="form-control signin-password" placeholder="Password"
                                    value={loginData.password}
                                    onChange={e => setloginData({ ...loginData, password: e.target.value })}
                                />
                                <div className="extra mt-3 row justify-content-between">
                                    <div className="col-6">
                                        <div className="forgot-password text-start" style={{ cursor: 'pointer' }}>
                                            <a onClick={() => setisShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="forgot-password text-end">
                                            <a href="reset-password.html">Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                            </div>
                        </form>
                        <div className="auth-option text-center pt-5">No Account? Sign up <Link href="/signup"><a className="text-link">here</a></Link>.</div>

                    </div>
                </AuthLayout>
            </div>
        </>
    )
}

export default login
