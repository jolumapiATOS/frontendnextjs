
function clearDatabase () {
    console.log("Triggered the delete function")
    const request = indexedDB.open("AtosDB", 1);
    let db;
    request.onerror = function(event) {
        console.log("Encounter an error inside the DB", event);
    };
    request.onsuccess = function(event) {
        db = event.target.result;
        const transaction = db.transaction('messages', 'readwrite');
        const store = transaction.objectStore('messages');
        const requestStore = store.clear();
        requestStore.onsuccess = function() {
            console.log("Successfully deleted all of your personal data")
            db.close();
        }
    };
}

export { clearDatabase }