const socket = io();

const buttonSendMessage = document.getElementById('buton-send')

buttonSendMessage.addEventListener('click', ()=> {
    const inputMessage = document.getElementById('send').value
    // alert(inputMessage)
    socket.emit('new-message', inputMessage)
} )


socket.on('mi mensaje', data => {
    alert(data)
})
socket.on('mi mensaje', data => {
    console.log(data)
    socket.emit('notificacion', 'Mensaje recibido exitosamente')
})
