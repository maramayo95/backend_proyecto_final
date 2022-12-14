const socket = io();

const buttonSendMessage = document.getElementById('buton-send')

buttonSendMessage.addEventListener('click', ()=> {
    const message = document.getElementById('send').value
    socket.emit('client-message', {
        message,
        token: getCookie("token"),
        email: getCookie("email")
    })
} )

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

socket.on('server-message', data => {
    console.log(data)
})
