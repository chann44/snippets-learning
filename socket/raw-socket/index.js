import http from "http"
import webSocket from "websocket"



// this is the server that makes a intial connection with browser 
const webserver = http.createServer((req, res) => {
    console.log("we got a request from the user ")
})


const websocket = new webSocket.server({
    "httpServer": webserver,
})

websocket.on("request", request => {
    var connection = request.accept(null, request.origin)
    connection.on("ping", () => console.log("open"));
    connection.on('close', () => console.log("closed"));
    connection.on('message', message => console.log(message))
    connection.send("hi bro ")
})




// tell the server where it can recive the request
webserver.listen(8080, () => {
    console.log("my server is up on port 8080")
})

