import { socket } from './service.js';
    function sendingDataToTheBackend () {
        setInterval(()=> {
            const worker = new Worker('/intervalServiceToSendData.js');
            worker.onmessage = (message) => {
                let data = JSON.parse(message.data)
                localStorage.setItem('MessageCount', data.length)
                socket.emit('bulk', {counter: localStorage.getItem('MessageCount'), user: localStorage.getItem('Auth'), messages: data })
                worker.terminate()
            }
            worker.postMessage('Start working');
        }, 10000)
    }

export { sendingDataToTheBackend }