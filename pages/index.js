import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { socket }  from '../public/service.js';


export default function Home() {
  const [log, setLog] = useState('unknown');

  useEffect(() => {
    socket.on('username', () => {
      setLog("known")
    })

    socket.on("disconnect", () => {
      setLog("unknown") // false
  });

  }, [socket])


  return (
    <div>
      <Head>
        <title> UPgrade | Daily   </title>
        <meta name='keywords' content='Tech Services' />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      { log === "unknown" && <div className="p-4">
        <h1 className={styles.title}> UPgrade | Frontend </h1>
        <p>
            The purpose of this app is for you to give daily feedback on all of your
            projects and daily advancements. Use it wisely and enjoy it. This app was created for you guys!
            
        </p>
        <h6>Loosely coupled architecture</h6>
        <ul>
          <strong>Powered by :</strong>
          <li>nextJS</li>
          <li>NodeJs</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
        </ul>
        <div id="img-logo" >
          <Image src="/logoApp.svg" height={200} width={200} alt="image-for-everyone" ></Image>
        </div>
      </div> }

      { log === "known" && <div className="p-4">
        <h1 className={styles.title}> Bienvenido </h1>
        
        <h4>Websocket</h4>
        <p>The app keeps track of whether you are connected or not. However you can still play around with the app.
          Every time the state changes it receives an update.
        </p>

        <h4>Databases</h4>
        <p>We have two databases running. One on the client side storing all his activities. The other one is running </p>

        <h4>Databases</h4>
        <p>We have two databases running. One on the client side storing all his activities. The other one is running on the Cloud. 
          When the user is connected the app reaches the backend and compares both versions. If the the one th user has is more recent
          it updates Mongo.
        </p>

        <h4>PWA</h4>
        <p>
          The app is installable and fully operational even offline.
        </p>

        
      </div>}


    </div>
  )
}
