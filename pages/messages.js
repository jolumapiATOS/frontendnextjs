import { useEffect, useState } from "react";
import styles from '../styles/MyOwn.module.css';
import Cardmessage from "../components/CardMessage";


const ListAllMessages = () => {

    const [messages, setMessages] = useState(null);

    useEffect( async() => {
        const res = await fetch('https://node-server-for-upgrade.herokuapp.com/getMyMessages', {
            headers: {
                'Content-Type': 'application/json',
                Auth: self.localStorage.Auth
            }
        })
         const data = await res.json();
         setMessages(data.messages);
     }, []);
    
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