// const socket = require('socket.io');

let socket = io();
$('form').submit(() => {
  socket.emit('send message', $('#message').val());
  $('#message').val('');
  return false;
});
socket.on('send message', (message) => {
  $('#messages').append($('<li>').text(message));
});
