import React from 'react'
import './error.css';
import { useNavigate } from 'react-router-dom';
const Error = ()=> {

    let navigate = useNavigate()

   const navigateLoginPage = () =>{

           navigate("/login")
        
   }


  return (
    <div className='errorPage'>

            <div>
                    <span className='errorheading'>404 ERROR</span>
                    <p className='text'>Sorry, the page not found</p>
                    <button className='button' onClick={()=>navigateLoginPage()}>Login</button>

            </div>     
    </div>
  )
}

export default Error
