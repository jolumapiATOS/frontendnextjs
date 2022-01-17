import { useState } from "react";

const CreateNewMessage = () => {
    const [messageUser , setMessage] = useState('');

    const sendInfo = async (e) => {
        e.preventDefault()
        const resp = await fetch("https://node-server-for-upgrade.herokuapp.com/message/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Auth: window.localStorage.Auth
            },
            body: JSON.stringify({messageUser})
        }).catch( e => { console.log(e) } )
        const data = await resp.json();
        alert("Successfully created")
    }

    return ( 
        <div>
            <h1>Create a new message</h1>
            <input value={messageUser} onChange={ (e) => { setMessage( e.target.value ) }} type="text" />

            <h1>Message:</h1>
            <p> { messageUser } </p>
            <br />
            <button onClick={ (e)=>{ sendInfo(e) } } >Save</button>
        </div>
     );
}
 
export default CreateNewMessage;