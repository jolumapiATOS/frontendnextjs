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
        location.replace("/");
    }

    return ( 
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand id="navbar-logo-mine" href="/">UPgrade | <strong id="daily-logo">Daily</strong>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    id="navbar-canvas-off-mine"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            { auth && <Link href="/newMessage">
                                <a className={ styles.btnAll }> New + </a>
                            </Link>}
                            { auth && <Link href="/">
                                <a className={ styles.btnAll }> Home </a>
                            </Link>}
                            { !auth && <Link href="/login">
                                <a className={ styles.btnAll }> Login </a>
                            </Link>}
                            { !auth && <Link href="/signUp">
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