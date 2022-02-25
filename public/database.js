function databaseCreation () {
    console.log("Triggered the creation of the database")
    const request = indexedDB.open("AtosDB", 1);
    request.onerror = function(event) {
        console.log("Encounter an error inside the DB", event);
    };
    request.onsuccess = function(event) {
        const db = event.target.result;
        console.log("Successfully created the database", event, db)
    };
    request.onupgradeneeded = function(event) {
    // Save the IDBDatabase interface
    const db = event.target.result;
    db.onerror = (event) => {
    console.log("This has been a mistake", event)
    }
    // Create an objectStore for this database
    const store = db.createObjectStore("messages", { autoIncrement : true });
    console.log(event, store)
    };
}

export { databaseCreation }

