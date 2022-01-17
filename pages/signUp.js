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
        const data = await res.json();
        console.log(data);
        window.localStorage.Auth = data.jwt;
    }


    return ( 
        <>
            <h1>Welcome!</h1>
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