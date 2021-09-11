import React from 'react'
import Header from '../Header';
const Master = (props) => {
    return (
        <>
            <div className="app">
                <Header />
                <div className="app-wrapper">
                    {props.children}
                    {/* <footer className="app-footer">
                        <div className="container text-center py-3">
                            <small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }} /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                        </div>
                    </footer> */}
                </div>
            </div>
        </>
    )
}

export default Master
