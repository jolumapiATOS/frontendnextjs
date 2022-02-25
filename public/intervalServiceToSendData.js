self.onmessage = () => {
        const request = indexedDB.open('AtosDB', 1);
        let db;
        request.onsuccess = (e) => {
            db = e.target.result;
            const transaction = db.transaction('messages', 'readwrite');
            const store = transaction.objectStore('messages');
            const query = store.getAll();
            query.onsuccess = (i) => {
                let result = JSON.stringify(i.target.result);
                call(result);
            }
        }
        request.onerror = (e) => {
            console.log(e)
        }
    
    function call (payload) {
        self.postMessage(payload);
    }
}