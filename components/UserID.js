import { useState, useEffect } from 'react';


const UserID = ({ socket }) => {
    const [name, setName] = useState('Loading...');
    const [id, setID] = useState()
    const [file, setFile] = useState();
    const [url, setURL] = useState();

    useEffect(()=> {
        socket.on("username-credentials", (payload)=> {
            setName(payload)
        })
        socket.on("url-for-profile-image", (payload)=> {
            let urlFromSocket = payload.url
            setURL(urlFromSocket);
            setID( payload.id );
        })
    }, [socket])

    function handleFile(e) {
        setFileName(e.target.files[0].name)
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
            setFileName('');
            socket.emit('photo', message)
        }
    }

    return (
        <>
            <h1>Credentials</h1>
            <div className="users-container-for-id">
                <h6 className="title-for-container-id">ID</h6>
                <p className='name-of-the-user-credentials'><strong> User: </strong> { name }</p>
                <p className='id-for-user-in-database'> <strong> ID: </strong>{ id }</p>
                { url && <img id='user-profile-image-for-everyone' src={url} alt="profile-image" srcSet='' /> }
                { !url && <form onSubmit={handleSubmit}>
                    <input onChange={handleFile} type="file" />
                    <button>Send</button>
                </form>}
            </div>
        </>
     );
}
 
export default UserID;