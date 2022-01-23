import { useState } from "react";
import { useRouter } from 'next/router'

const CreateNewMessage = () => {
    const [messageUser , setMessage] = useState('');
    const [ write, setWrite ] = useState(null)
    const router = useRouter();

    const sendInfo = async (e) => {
        setWrite(null);
        e.preventDefault()
        const resp = await fetch("https://node-server-for-upgrade.herokuapp.com/message/new", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Auth: self.localStorage.Auth
            },
            body: JSON.stringify({messageUser})
        }).catch( e => { console.log(e) } )
        const data = await resp.json();
        router.push("/messages");
    }
    const writting = () => {
        setWrite("Writing...." + "." )
    }

    return ( 
        <div id="container-message-new" className="p-4">
            <h3 className="my-3">New | Entry</h3>
            <input value={messageUser} onInput={ (e) => { writting()  }} onChange={ (e) => { setMessage( e.target.value ) }} type="text-area" /> 
            {write && <div id="spinner-for-spin" className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            <br />
            <button className="btn btn-primary my-4" onClick={ (e)=>{ sendInfo(e) } } >Save</button>
        </div>
     );
}
 
export default CreateNewMessage;