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
      
        <h1 className={styles.title}>Jose Luis Matias Pineda</h1>
        <p>
          Sit fugiat laboris do anim nisi quis in. Irure aute aliqua eu cupidatat velit occaecat exercitation 
          exercitation aliquip est consectetur elit do aliquip. Proident ut eu aliquip dolore fugiat exercitation nostrud cillum 
          id cillum dolor in. Adipisicing voluptate adipisicing labore elit quis consequat non fugiat fugiat. Cillum ullamco irure irure
          amet aliqua sit aliqua incididunt elit eu amet nulla. Sit officia commodo quis sint elit sunt voluptate adipisicing laboris nulla in ut.
        </p>
        <Link href="/projects/all">
            <a className={ styles.btn }> See projects links </a>
        </Link>
        
      </div>
    </>
  )
}
