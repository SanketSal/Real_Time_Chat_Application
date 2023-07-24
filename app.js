const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

const chatRooms = {};

io.on('connection', (socket) => {
  socket.on('join', (data) => {
    const { username, room } = data;
    socket.join(room);
    socket.emit('message', { user: 'admin', text: `${username}, welcome to ${room}.` });
    socket.broadcast.to(room).emit('message', { user: 'admin', text: `${username} has joined.` });

    // Save user information
    if (!chatRooms[room]) {
      chatRooms[room] = [];
    }
    chatRooms[room].push({ id: socket.id, username });
  });

  socket.on('sendMessage', (data) => {
    const { room, message } = data;
    const user = chatRooms[room].find((user) => user.id === socket.id);
    io.to(room).emit('message', { user: user.username, text: message });
  });

  socket.on('disconnect', () => {
    for (const room in chatRooms) {
      chatRooms[room] = chatRooms[room].filter((user) => user.id !== socket.id);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
