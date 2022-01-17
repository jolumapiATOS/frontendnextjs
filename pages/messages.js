import { useEffect, useState } from "react";



const ListAllMessages = () => {

    const [messages, setMessages] = useState(null);

    useEffect( async() => {
        const res = await fetch('https://node-server-for-upgrade.herokuapp.com/getMyMessages', {
            headers: {
                'Content-Type': 'application/json',
                Auth: window.localStorage.Auth
            }
        })
         const data = await res.json();
         setMessages(data.messages);
     }, []);
    
    return ( 
        <div>
            <h1>Messages</h1>
            <div>
                { messages && messages.map( m => { return <div key={m._id + 1} > <p key={m._id} > { m.message } </p> </div> }) }
            </div>
        </div>
     );
}
 
export default ListAllMessages;