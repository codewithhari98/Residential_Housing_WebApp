
// const io = require('socket.io')(3000, {cors: {origin: "*"}});
// const users = {}



// io.on('connection', (socket) => {
//   console.log('A user has connected.');
//   socket.on('new-user', name => {
//     users[socket.id] = name
//     socket.broadcast.emit('user-connected', name)
//   })
//   socket.on('send-chat-message', message => {
//     socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
//   })
//   socket.on('disconnect', (socket) => {
//     socket.broadcast.emit('user-disconnected', users[socket.id])
//     delete users[socket.id]
//   })
// })
const io = require('socket.io')(3000, {cors: {origin: "*"}});
const users = {}
const rooms = {}

io.on('connection', (socket) => {
  console.log('A user has connected.');
  socket.on('new-user', name => {
    users[socket.id] = name
    rooms[socket.id] = []
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.join(rooms[socket.id])
    socket.broadcast.to(rooms[socket.id]).emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.leave(rooms[socket.id])
    delete users[socket.id]
    delete rooms[socket.id]
  })
})
