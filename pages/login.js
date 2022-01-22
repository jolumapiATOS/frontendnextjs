import { useState } from "react";
import styles from "../styles/Home.module.css"
import Image from 'next/image';

const SignUp = () => {
    const [name, setName ] = useState('');
    const [ account, setAccount ] = useState('');

    const sendInfo =  async (e) => {
        e.preventDefault();
        const res = await fetch('https://node-server-for-upgrade.herokuapp.com/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, password: account })
        });
        if( res.status === 200 ) {
            alert("You have successfully logged in!");
            const data = await res.json();
            window.localStorage.setItem("Auth", data.jwt);
        } else {

        }
    }


    return ( 
        <div className="p-4">
            <h1 className="text-center">Welcome back!</h1>
            <div id="img-logo">
                <Image alt="logo" src="/appFrom.svg" height={200} width={200} ></Image>
            </div>
            <div className="container-centered">
                <input value={ name } onChange={ (e) => { setName( e.target.value ) } } placeholder="Enter your full name" type="text" name="" id="" />
                { name }
                <br />
                <input value={ account } onChange={ (e)=> { setAccount( e.target.value )  } } placeholder="Enter password" type="text" name="" id="" />
                { account }
                <br />
                <button  className="btn btn-primary my-5" onClick={ (e)=>{ sendInfo(e) }  } > Log in! </button>
            </div>
        </div>
     );
}
 
export default SignUp;