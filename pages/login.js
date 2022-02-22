import { useState } from "react";
import Image from 'next/image';
import Swal from 'sweetalert2'


const Login = () => {
    const [name, setName ] = useState('');
    const [ account, setAccount ] = useState('');

    const sendInfo =  async (e) => {
        e.preventDefault();
        /**
         * @description this should inside of a try catch to handle errors
         */
        const res = await fetch('https://node-server-for-upgrade.herokuapp.com/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, password: account }) // * @ not quite sure, about using the raw password on the http request is the best practice maybe some encriptation will be nice
        });
        // * @ this is the tail
        // * .then((response) => response.json());
        const data = await res.json(); // * @ this is could be part of the then tail of the before promise, and it can be removed
        // * @ so you can use one single await and one single try catch to handle the errors
        if( data.notification === "User not found" ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Not valid credentials please try again!'
              })
        } else {
            window.localStorage.setItem("Auth", data.jwt);
            window.localStorage.setItem("Teacher", data.teacher);
            Swal.fire(
                'Successfully logged in!',
                'You clicked the button!',
                'success'
              )
            location.replace('/')
        }
    }


    return ( 
        <div className="p-4">
            <h1 className="text-center">Welcome back!</h1>
            <div id="img-logo">
                {/* @ images can be abstracted from direct importation to js file that holds all the graphics urls into object */}
                <Image src="/logo-form.svg" height={200} width={200} alt="logo"></Image>
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
 
export default Login;