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

//Disconnected
socket.on("disconnect", () => {
    console.log("Socket disconnected"); // false
});


export { socket }