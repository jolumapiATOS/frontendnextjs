import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { socket } from '../public/service.js'

const NavbarForApp = () => {
    const [auth, setAuth] = useState(null);
    const [ teacher, setTeacher ] = useState(false);
    const [ online, setOnline ] = useState("Connecting...");

    useEffect(() => {

        socket.on("connect", () => {
            setOnline('Online')
            console.log("Succesfully connected to the socket");
        });

        socket.on("disconnect", () => {
            setOnline("Offline")
            console.log("Succesfully connected to the socket");
        });


       if(window.localStorage.Auth){
            setOnline('offline')
           setAuth(localStorage.getItem('Auth'));
       } else {
           setAuth(null)
       }

       if(window.localStorage.Teacher === "true") {
           setTeacher(localStorage.getItem('Teacher'));
       } else {
           setTeacher(null)
       }

    }, [auth, socket]);

    const handleLogOut = () => {
        window.localStorage.removeItem('Auth');
        setAuth(null);
        location.replace("/");
    }

    return ( 
        <>
            <Navbar id="navbar-canvas-off-mine" expand={false}>
                <Container fluid>
                    <Navbar.Brand id="navbar-logo-mine" href="/"> { online } | <strong id="daily-logo">Daily</strong>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1">
                            { auth && !teacher && <Link href="/newMessage">
                                <a className={ styles.btnAll }> New + </a>
                            </Link>}
                            { auth && !teacher &&  <Link href="/">
                                <a className={ styles.btnAll }> Home </a>
                            </Link>}
                            { !auth && <Link href="/login">
                                <a className={ styles.btnAll }> Login </a>
                            </Link>}
                            { !auth &&  <Link href="/signUp">
                                <a className={ styles.btnAll }> Sign Up </a>
                            </Link>}
                            { auth && !teacher &&  <Link href="/messages">
                                <a className={ styles.btnAll }> All entries </a>
                            </Link> } 
                            { auth && teacher && <Link href="/pool"> 
                                <a className={ styles.btnAll }> Pool </a>
                            </Link> }
                            { auth && <a  className={ styles.btnOut } onClick={ () => {  handleLogOut()  } } >
                                Log Out 
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