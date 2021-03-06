import Swal from "sweetalert2";
const { io } = require("socket.io-client");
const socket = io.connect("https://node-server-for-upgrade.herokuapp.com/");
//const socket = io.connect("http://localhost:8000/");


    socket.on("connect", () => {    
        console.log("Succesfully connected to the socket");
        
    });
    
    socket.on('jwt', (payload) =>{
        socket.emit('auth', localStorage.getItem("Auth"))
        
    })
    
    socket.on('fetch-messages', (payload) => {
        (function AddMultiple () {
            let userCounter = localStorage.getItem('MessageCount');
            let databaseCounter = payload.messages.length;
            if(databaseCounter > userCounter) {
                console.log("Activated from the function", payload)
                let request = indexedDB.open("AtosDB", 1);
                let db;
                if(request){
                    request.onerror = function(event) {
                        console.log("Encounter an error inside the DB");
                    };
                    request.onsuccess = function(event) {
                        db = event.target.result
                        const transaction = db.transaction('messages', 'readwrite');
                        const store = transaction.objectStore('messages');
                        addMore(payload.messages, store)
                    };
                    function addMore(array, store) {
                        let requestOnData;
                        for(let i = 0; i < array.length; i ++ ) {
                            requestOnData = store.put({ message: array[i].message, time: Date.now()})
                        }
                    }
                } 
            }  else {
                console.log("User up to date")
            }
        }())
        
    })
    
    socket.on("invalid", () => {
        let timerInterval
        Swal.fire({
        title: 'Login 🤞',
        html: '<b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
        })
        })
    
    //Disconnected
    socket.on("disconnect", () => {
        console.log("Socket disconnected"); // false
    });


//Connection established



export { socket }