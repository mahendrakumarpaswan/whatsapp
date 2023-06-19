import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import QRCode from 'react-qr-code';
import './Robotics.css';

const socket = io.connect('http://localhost:4000', {});

const Robotics = () => {
  const [show,setShow] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');
  const [session, setSession] = useState('');

  useEffect(() => {
    socket.emit('connected', 'hello from client');
    console.log('client side');

    socket.on('qr', (data) => {
      console.log('hi from server');
      console.log('QR RECEIVED', data.qr);
      setQrCodeData(data.qr);
    });

    socket.emit('createSession', {
      id: session,
    });

    return () => {
      // Clean up the WebSocket connection on component unmount
      socket.disconnect();
    };
  }, [session]);


  const toggleQRCode = () =>{
         setShow(!show);
  }




  return (
    <div className="robotics">
       
      <button onClick={()=>toggleQRCode()} style={{borderRadius:'5px'}}>ShowQRCode</button>

    

         {show && <div>  <h1>WhatsApp QR Code</h1>
         {/* <input type="text" value={session} onChange={(e) => setSession(e.target.value)} /> */}
         <h3>Open WhatsApp and scan QR code</h3>
         <QRCode value={qrCodeData} /></div>}








    </div>
  );
};

export default Robotics;