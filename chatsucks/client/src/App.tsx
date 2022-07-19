import { useState, useEffect } from "react";
import { socket, SocketContext } from "./socket";
import sha from "sha1";
function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [connectedUsers, setConnectedusers] = useState<object>();
  const [toName, setToName] = useState("");
  useEffect(() => {
    console.log(socket);
    socket.on("get message", function (data) {
      console.log(data);
      //setConnectedusers({ ...connectedUsers, users });
      // setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("get message");
      socket.off("send message");
    };
  }, [messages]);

  const sendMessage = () => {
    console.log(message);
    socket.auth = { username: name};
    socket.emit("connec")
    socket.emit("send message", {
      id: socket.id,
      message: message,
      name: name,
    });
    setMessage("");
    socket.connect();
  };

  

  return (
    <SocketContext.Provider value={socket}>
      <div className="">
        <ul id="messages"></ul>
        <input
          id="input"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input
          placeholder="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="toName"
          value={toName}
          onChange={(e) => {
            setToName(e.target.value);
          }}
        />

        <button onClick={sendMessage}>Send</button>
        {/*
          <div>


          {messages
            ? messages.map((msg: any) => {
        e/
                return <p>{msg.message}  by {msg.name} is {connectedUsers ? msg.id in connectedUsers ? "online" : "ofline" : null}  </p>;
              })
            : null}
        </div>
        */}
      </div>
    </SocketContext.Provider>
  );
}

export default App;
