import { useState, useEffect } from 'react';
import { socket } from '../public/service.js'


const UserID = () => {
    const [name, setName] = useState();
    const [id, setID] = useState()
    const [file, setFile] = useState();
    const [url, setURL] = useState();

    useEffect(()=> {
        socket.on("credentials", (payload)=> {
            setName(payload)
        })
        socket.on("url-for-profile-image", (payload)=> {
            let urlFromSocket = payload.url
            setURL(urlFromSocket);
            setID( payload.id );
        })
    }, [socket])

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    function handleSubmit (e) {
        console.log("sent the file")
        e.preventDefault();
        if(file) {
            const message = {
                token: localStorage.getItem('Auth'),
                type: 'file',
                body: file,
                mimeType: file.type,
                fileName: file.name 
            };
            setFile();
            socket.emit('photo', message)
        }
    }

    return (
        <>
            <h1 className='text-center'>Welcome</h1>
            <div className="users-container-for-id"> 
                { name && <p className='name-of-the-user-credentials'><strong> User: </strong> { name }</p>}
                { url && <img id='user-profile-image-for-everyone' src={url} alt="profile-image" srcSet='' /> }
                { !url && <form onSubmit={handleSubmit}>
                    <input onChange={handleFile} type="file" />
                    <button>Send</button>
                </form> }
            </div>
        </>
     );
}
 
export default UserID;