import { useEffect, useState } from "react";
import Cardmessage from "../components/CardMessage";


const ListAllMessages = () => {

    const [messages, setMessages] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=> {
        const abortCont = new AbortController();
        setLoading(true);
        fetch('https://node-server-for-upgrade.herokuapp.com/getMyMessages', {
            signal: abortCont.signal,
            headers: {
                'Content-Type': 'application/json',
                Auth: self.localStorage.Auth
            }
        }).then(response => {
            return response.json();
        }).then( data => {
            setLoading(false);
            setMessages(data.messages);
        }).catch(e => { console.log(e) })
            setLoading(false)
        return () => abortCont.abort();
    }, [])

    return ( 
        <div className="p-4">
            { loading ? <h1>Loading....</h1> : <h1 id="title-advancements-head">Advancements</h1>}
            <div>
                { messages && messages.map( (m, index ) => { return <Cardmessage key={m._id} index={ index + 1 } message={ m } />   }) }
            </div>
        </div>
     );
}
 
export default ListAllMessages;