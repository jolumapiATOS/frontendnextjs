import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(()=> {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }

    setInterval(() => {
      if(navigator.onLine) {
        if(!Worker) {
          console.log("Service not available! Please change or update your web browser")
        } else {
          let workerDB = new Worker("/wwDB.js");
          workerDB.onmessage = function (oEvent) {
            console.log("Called back by the worker!", oEvent);
          };
          workerDB.postMessage(self.localStorage.Auth)
        }
        //console.log("online")
       } else {
        console.log("offline")
       }
      },30000 )

  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
