import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';
var socket=io.connect('http://localhost:4000')

function App() {
  let [name,setname]=useState('');
  let [room,setroom]=useState('');
  let [login,setlogin]=useState(true)
 function enterroom(){
   var obj={
     name:name,
     room:room
   }
   socket.emit('add',obj);
   setlogin(false);


  }
  if(login){
    return (
      <div className="App">
        <div className='login'>
          <h1> Login </h1>
          <input id="name" placeholder='Enter name' onChange={(e)=>setname(e.target.value)} ></input>
        
          <input id="room" placeholder='Enter room' onChange={(e)=>setroom(e.target.value)} ></input>
        <button id="enter" onClick={enterroom}>Enter</button>
        </div>
      </div>
    );
  }
  return(
<Chat name={name} room={room} socket={socket}></Chat>    
  )
}

export default App;
