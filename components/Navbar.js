import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

const NavbarForApp = () => {
    const [auth, setAuth] = useState(null);
    useEffect(() => {
       if(window.localStorage.Auth){
           setAuth(localStorage.getItem('Auth'))
       } else {
           setAuth(null)
       }
    }, [auth]);

    const handleLogOut = () => {
        window.localStorage.removeItem('Auth');
        setAuth(null);
    }

    return ( 
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">UPgrade | Daily Advancements</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Actions</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            { auth && <Link href="/newMessage">
                                <a className={ styles.btnNew }> New + </a>
                            </Link>}
                            { auth && <Link href="/">
                                <a className={ styles.btnAll }> Home </a>
                            </Link>}
                            { !auth && <Link href="/">
                                <a className={ styles.btnAll }> Login </a>
                            </Link>}
                            { !auth && <Link href="/">
                                <a className={ styles.btnAll }> Sign Up </a>
                            </Link>}
                            { auth && <Link href="/messages">
                                <a className={ styles.btnAll }> All entries </a>
                            </Link> } 
                            { auth && <a onClick={ () => {  handleLogOut()  } } >
                                <a className={ styles.btnOut }> Log Out </a>
                            </a>}
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
        
     );
}
 
export default NavbarForApp;