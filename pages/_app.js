import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/portal.css';
import React, { useEffect } from 'react';
import axios from 'axios';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
    axios.defaults.baseURL = "http://127.0.0.1:8000";
    // global.localStorage = new LocalStorage('./scratch');
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
