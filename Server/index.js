//  const express = require("express");
//  const app = express();
//  const http = require("http");
//  const cors = require("cors");
//  const { Server } = require("socket.io");
//  app.use(cors());

//  const server = http.createServer(app);
//  const io = new Server(server, {
//      cors: {
//        origin: "http://localhost:3001",
//        methods: ["GET", "POST"],
//      },
//    });
//    io.on("connection", (socket) => {
//      console.log(`User Connected: ${socket.id}`);
  
//      socket.on("join_room", (data) => {
//        socket.join(data);
//        console.log(`User with ID: ${socket.id} joined room: ${data}`);
//      });
  
//      socket.on("send_message", (data) => {
//        socket.to(data.room).emit("receive_message", data);
//      });
  
//      socket.on("disconnect", () => {
//        console.log("User Disconnected", socket.id);
//      });
//    });

//  server.listen(4000,function(){
//      console.log('listning');
   
//  })



// const { ServeRunner } = require('@ionic/cli/lib/serve');
// const express=require('express');
// const app=express();
 
// const {Server}=require('socket.io');

// const server=http.createServer(app);

// //const users={}
// io.on('connection',socket=>{
//     console.log(socket);
//       socket.on('addNewUser',name=>{
//           console.log('new user',name.message);
//         users[socket.id]=name;
//         socket.broadcast.emit('userJoind',name);
//     });
// socket.on('send', message=>{
// socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})
// });

// });

// io.on("connection",(socket)=>{
// console.log('user connected',socket.id);
// socket.on("send",(data=>{
//     io.emit("rec","arslan");
//     socket.emit('rec2',"arslan");
// }))
// });
// const users={}
// var express=require('express');
// var app=express();
// var http=require('http').createServer(app);
// var socketio=require('socket.io')(http,{
//     cors:{
//         origin:"*"
//     }
// });
// socketio.on("connection",function(socket){
//      console.log(socket.id);
//        socket.on('addNewUser',function(obj){
//            socket.join(obj);
//            console.log(`new user with id${socket.id} joined the room ${obj.room} `);
//          //users[socket.id]=name;
//          socket.broadcast.emit('userJoind',obj);
//      });
//  socket.on('send', message=>{
//  socket.broadcast.emit('recieve',{message:message,name:users[socket.id]})
//  });

//  });
// socketio.on('disconnect',()=>{
// console.log('disconnected');
// })
var users={};
var mes={};
const express=require("express");
const app= express;
const http=require('http').createServer(app);
const socketio=require('socket.io')(http,{
cors:{
  origin:"*"
}
});


socketio.on('connection',function(socket){
console.log(`user joined with id ${socket.id}`);
  socket.on('add',function(data){
  socket.join(data.room)
    users.name=data.name;
    users.room=data.room;
    users[socket.id]=data.room;
    console.log(`user ${users.name} and ${users.room}`);
    
  });

        socket.on("send_message", (data) => {
         
          mes.name=data.name;
          console.log(`data ${mes.name}`);
          socket.to(data.room).emit("receive_message", data);
      });
  
      socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
      });
    });






http.listen(4000,function(){
  console.log('listning');
})