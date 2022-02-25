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
//Wrapper of redux to make available the store globally
import { store } from '../components/redux/store.js'
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    
    databaseCreation();
    sendingDataToTheBackend();
    serviceWorkerRegistrationProcess();

  }, [])

  return (
    <Provider store={ store }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
