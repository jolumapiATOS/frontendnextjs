import Swal from "sweetalert2";
const { io } = require("socket.io-client");
const socket = io.connect("https://node-server-for-upgrade.herokuapp.com/");
//const socket = io.connect("http://localhost:8000/");



//Connection established
socket.on("connect", () => {
    console.log("Succesfully connected to the socket");
    
});

socket.on('jwt', (payload) =>{
    socket.emit('auth', localStorage.getItem("Auth"))
    
})

socket.on("invalid", () => {
    let timerInterval
    Swal.fire({
    title: 'Login 🤞',
    html: 'You know you want to. <b></b> milliseconds.',
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


export { socket }