import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title> UPgrade | Jose Luis Matias Pineda  </title>
        <meta name='keywords' content='Tech Services' />
      </Head>
      <div>
      
        <h1 className={styles.title}>This is an app created with React & NextJS</h1>
        <p>
          Esta es una aplicacion que consume informacion de un End-Point JSON placeholder. Puede hacer click en todos los elementos del dom.
          Se utilizaron varios componentes. Uno de ellos es para la Navbar otro para el Footer y finalmente los contenidos se pasan al componente llamado Layout
          como props.children.
        </p>

        <Link href="/projects/all">
            <a className={ styles.btn }> Display all users </a>
        </Link>
        
      </div>
    </>
  )
}
