import { useState} from "react";

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
            window.localStorage.Auth = data.jwt;
        } else {

        }
    }


    return ( 
        <>
            <h1>Welcome!</h1>
            <p>Please enter your data below:</p>
            <input value={ name } onChange={ (e) => { setName( e.target.value ) } } placeholder="Enter your full name" type="text" name="" id="" />
            { name }
            <br />
            <input value={ account } onChange={ (e)=> { setAccount( e.target.value )  } } placeholder="Enter github account" type="text" name="" id="" />
            { account }
            <br />
            <button onClick={ (e)=>{ sendInfo(e) }  } > Create! </button>
        </>
     );
}
 
export default SignUp;