import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
//WebSocket Connection
import '../public/service.js'
import { socket } from '../public/service.js'

function MyApp({ Component, pageProps }) {
  /**
   * @description this could be a custom hook by the size of code on this useEffect
   */
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

    if(indexedDB) {
      const request = indexedDB.open("AtosDB", 1);
        request.onerror = function(event) {
            console.log("Encounter an error inside the DB", event);
          };
        request.onsuccess = function(event) {
            const db = event.target.result;
            console.log("Successfully created the database", event)
        };
        request.onupgradeneeded = function(event) {
        // Save the IDBDatabase interface
        const db = event.target.result;
        db.onerror = (event) => {
          console.log("This has been a mistake", event)
        }
        // Create an objectStore for this database
        const store = db.createObjectStore("messages", { autoIncrement : true });
        console.log(event, store)
        };
    }

    setInterval(() => {
      console.log("Trying to save the data")
      if(navigator.onLine) {
        const request = indexedDB.open('AtosDB', 1);
        let db;

          request.onsuccess = function(e){
          db = e.target.result;
          const transaction = db.transaction('messages', 'readwrite');
          const store = transaction.objectStore('messages');
          const query = store.getAll();
          query.onsuccess = function() {
              let messages = query.result;
              socket.emit('bulk', {messages, user: localStorage.getItem("Auth")})
          }
        }
      }
      }, 10000)

  }, []);


  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
