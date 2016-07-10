const app = require('express')(),
      http = require('http').Server(app),
      io = require('socket.io')(http);

// app.use(require('express').static('data'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// This is auto initiated event when Client connects to Your Machine.
io.on('connection', (socket) => {
  console.log('connected');
  // TODO authenticate user
  socket.on('validate', (data) => {
    return data;
  });
  // send message to all clients
  socket.on('send message', (data) => {
    console.log(`message: ${data}`);
    io.emit('send message', data);
  });
  socket.on('disconnect', () => {
    console.log('disconnected');
    // io.emit('exit', {});
  });
});

http.listen(3001, () => {
  console.log('listening on 3001');
});
