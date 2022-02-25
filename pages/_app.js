import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
//WebSocket Connection
import '../public/service.js';
//Interval to send the data to the backend
import { sendingDataToTheBackend } from '../public/serviceInterval.js'
//IndexedDB database creation
import { databaseCreation } from '../public/database.js'
//ServiceWorker Registration Process
import { serviceWorkerRegistrationProcess } from '../public/serviceWorkerRegistration.js'
//Exercise for a module


function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    
    databaseCreation();
    sendingDataToTheBackend();
    serviceWorkerRegistrationProcess();

  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
