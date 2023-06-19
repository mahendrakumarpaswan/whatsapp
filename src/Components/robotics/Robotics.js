import React from 'react'
import './Robotics.css';

import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import QRCode from "react-qr-code";

const socket=io.connect("http://localhost:4000",{});

const Robotics = () => {

  const [show,setShow] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');
  const [session,setSession]=useState('');


  const createSession=()=>{
    socket.emit("createSession",{
    id:session
  });
  
}


useEffect(() => {
  socket.emit("connected","hello from client");
  console.log("client side")
  socket.on("qr",(data)=>{
  // const {qr}=data
  console.log("hi from server")
  console.log("QR RECEIVED",data.qr);
  setQrCodeData(data.qr);
 });

  },[]);


  const toggleQRCode = () =>{
     
    setShow(!show);
  }

  return (
    <div className='robotics'>
            
          <button  onClick={()=>toggleQRCode()} style={{borderRadius:'10px'}}>ShowQRCODE</button>
            {show && <div> <h1>WhatsApp QR Code</h1>
            <input type='text' value={session} onChange={(e)=>{setSession(e.target.value)}}/>
            <button onClick={createSession}>create Session</button>
            <h3>Open Whatsapp and scan QR code</h3>
           <QRCode value={qrCodeData}/></div>}
    </div>
  )
}

export default Robotics
