//Externl Lib Import
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = new express();

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  //   console.log("new user connect");

  //   socket.on("disconnect", () => {
  //     console.log("user disconnect");
  //   });

  //   setTimeout(() => {
  //     socket.send("send message to server");
  //   }, 1000);

  //   setInterval(() => {
  //     const time = new Date().getTime();

  //     socket.send(time);
  //   }, 100);

  //   setInterval(() => {
  //     const time = new Date().getTime();

  //     socket.emit("myTime", time);
  //   }, 100);

  //   socket.on("myName", (msg) => console.log(msg));

  io.sockets.emit("myBroadcasting", "hello world");
});

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen("8080", () => console.log("server is listen 808"));
