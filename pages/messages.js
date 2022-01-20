import { useEffect, useState } from "react";
import styles from '../styles/MyOwn.module.css';
import Cardmessage from "../components/CardMessage";


const ListAllMessages = () => {

    const [messages, setMessages] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();
        fetch('https://node-server-for-upgrade.herokuapp.com/getMyMessages', {
            signal: abortCont.signal,
            headers: {
                'Content-Type': 'application/json',
                Auth: self.localStorage.Auth
            }
        }).then(response => {
            return response.json();
        }).then( data => {
            setMessages(data.messages);
        }).catch(e => { console.log(e) })
        return () => abortCont.abort();
    }, [])

    return ( 
        <div>
            <h1>Messages</h1>
            <div>
                { messages && messages.map( m => { return <Cardmessage key={m._id} message={ m } />   }) }
            </div>
        </div>
     );
}
 
export default ListAllMessages;