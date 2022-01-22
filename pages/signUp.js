import { useState} from "react";
import Image from 'next/image';

const SignUp = () => {
    const [name, setName ] = useState('');
    const [ account, setAccount ] = useState('');

    const sendInfo =  async (e) => {
        e.preventDefault();
        const res = await fetch('https://node-server-for-upgrade.herokuapp.com/user/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, accountGitHub: account })
        });
        if( res.status === 200 ) {
            alert("Your account has been succesfully created!");
            const data = await res.json();
            window.localStorage.setItem("Auth", data.jwt);
            location.replace("/");
        } else {

        }
    }


    return ( 
        <div className="p-4">
            <h1 className="text-center">Welcome!</h1>
            <div id="img-logo">
                <Image src="/logo-fom2.svg" height={200} width={200} alt="logo-enterprise" ></Image>
            </div>
            <div className="container-centered">
                <input value={ name } onChange={ (e) => { setName( e.target.value ) } } placeholder="Enter your full name" type="text" name="" id="" />
                { name }
                <br />
                <input value={ account } onChange={ (e)=> { setAccount( e.target.value )  } } placeholder="Enter password" type="text" name="" id="" />
                { account }
                <br />
                <button className="btn btn-primary my-5" onClick={ (e)=>{ sendInfo(e) }  } > Create account </button>
            </div>
        </div>
     );
}
 
export default SignUp;