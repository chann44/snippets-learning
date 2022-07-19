import express, {Request, Response} from "express";
import cors from "cors"
import {Server} from "socket.io"
import http from "http";


const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server, {cors: {
    origin: "http://localhost:3000",
  }}
)

app.get("/", (req: Request, res: Response) => {
  console.log(req)
    res.json({
      data: "connected to server "
    })
})

io.use((socket:any, next) => {
    const name = socket.handshake.auth.username;
    socket.name = name; 
    next()
})

io.on("connection", (socket: any) => {
    console.log("socket connected", socket.id);
    
  const users:any = [];
  socket.on("connect", () => {
    for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: (socket as any).name,
    });
  }
  })
  
  console.log(users)
  socket.on("private", (data: any) => {
      users.map((user: any) => {
        if(user.username == data.toName) {
          console.log(user.id)
          socket.to(user.id).emit("private", {data})
        } 
      }) 
  })
    socket.on("send message", (data: any) => {
      console.log(data)
      io.emit('get message', {data})
    })
    socket.on("disconnect", ()=> {
      console.log("user disconnected")
    })
})

server.listen(3001, ()=> {
console.log("server is running on 3001")
})
