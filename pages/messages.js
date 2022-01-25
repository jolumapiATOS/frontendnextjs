import { useEffect, useState } from "react";
import Cardmessage from "../components/CardMessage";


const ListAllMessages = () => {

    const [messages, setMessages] = useState(null);
    const [loading, setLoading ] = useState("true");

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
            setLoading(null);
            setMessages(data.messages);
        }).catch(e => { console.log(e) })
            setLoading(null)
        return () => abortCont.abort();
    }, [])

    return ( 
        <div className="p-4">
            { (messages === null) && <div id="spinner-for-teacher" className="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> }
            { (messages === null) ? <h1>Loading....</h1> : <h1 id="title-advancements-head">Advancements</h1>}
            <div>
                { messages && messages.map( (m, index ) => { return <Cardmessage key={m._id} index={ index + 1 } message={ m } />   }) }
            </div>
        </div>
     );
}
 
export default ListAllMessages;