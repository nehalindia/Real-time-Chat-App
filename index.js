const express = require("express")
const { Socket } = require("socket.io")
const app = express()

const http = require('http').createServer(app)
const socketio = require('socket.io')(http)

const PORT = process.env.PORT || 3000

// app.use('/')

http.listen(PORT, ()=> {
    console.log(`server started ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})


socketio.on('connection', (Socket) =>{
    console.log('connected socket')
})