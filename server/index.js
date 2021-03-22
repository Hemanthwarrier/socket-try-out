const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

const http = require('http')
const socketIo = require('socket.io')
const server = http.createServer(app);
const io = socketIo(server);


app.get('/',(req,res)=>{
    res.send("Hello World")
})

io.on('connection',(socket)=>{
    console.log("User connected from: ",socket.origin)

    socket.emit("demo",'hello');

    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})

const PORT = process.env.PORT || 8000
server.listen(PORT,()=>{
    console.log(`Server listening to port:${PORT}`)
})