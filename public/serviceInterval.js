import { socket } from './service.js';
function sendingDataToTheBackend() {
    setInterval(() => {
        console.log("Trying to save the data")
        if(navigator.onLine) {
        const request = indexedDB.open('AtosDB', 1);
        let db;
            request.onsuccess = function(e){
            console.log("Inside the archive")
            db = e.target.result;
            const transaction = db.transaction('messages', 'readwrite');
            const store = transaction.objectStore('messages');
            const query = store.getAll();
            query.onsuccess = function() {
                let messages = query.result;
                socket.emit('bulk', {messages, user: localStorage.getItem("Auth")})
            }
        }
        }
        }, 60000)
}

export { sendingDataToTheBackend }