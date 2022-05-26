import React,{useState,useEffect} from "react";

function Chat({name,room,socket}){
let [message,setmessage]=useState('');
let [mlist,setmlist]=useState([]);

 function sentmessage(){
    const obj={
        name:name,
        room:room,
        message:message,
    }
    setmlist([...mlist,obj]);
    socket.emit("send_message",obj);
   
       
}
useEffect(()=>{
   
    socket.on("receive_message",function(data){
        setmlist((list)=>[...list,data]);
        console.log("i am list at rec ",data);
    });
},[socket,name,room])
    return(
        <div className="App">
            
        <div className="chatbox">

            <div className="chat">
               { 
               mlist.map((m)=>{

                return(
                    <div className="message " id={name===m.name ? "right":"left"}>
                    <div className="content">
                        <p>{m.message}</p>
                    </div>
                </div>
            
                );
               })
            }  
            </div>
               
            <div className="footer">
            <input id="minput" onChange={(e)=>setmessage(e.target.value)}></input>
            <button id="cbtn" onClick={sentmessage}>send</button>
            </div>
            
        </div>
        </div>
    )

}

export default Chat;