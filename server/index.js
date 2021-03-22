const express = require('express')
const app = express()
app.use(express.json())

const http = require('http').Server(app)
const io = require('socket.io')(http)

const cors = require('cors')
app.use(cors())

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
app.listen(PORT,()=>{
    console.log(`Server listening to port:${PORT}`)
})