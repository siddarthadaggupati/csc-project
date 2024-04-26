import React from 'react'
import Navbar from '../components/NavLog'
import { useState } from 'react';
import axios from 'axios';
function AHelp() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const handleSubmit=()=>{
        try{
          const response = axios.post('http://localhost:8000/sendemail',{
            name: name,
          email: email,
          subject: subject,
          message: message,
        })
        if(response.data === 'sent')
        {
          alert('Mail Sent Successfully.')
        }
        else
        {
          alert('Error in Sending Message.')
        }
        }
        catch(e)
        {
          console.log(e)
        }
      }
  return (
    <div>
     <div className="navbar">
      <Navbar/>
     </div>
     <div className="remaining">
     <h1 style={{color:'black', marginRight:'auto'}}>Send Message</h1>
      <div className="contact-page">
      <div className="contact-info-contanier">
        <label>Enter Name</label>
        <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} placeholder ='enter name' id="" />
        <label>Enter email</label>
        <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder ='enter email' id="" />
        <label>Enter Subject</label>
        <input type="text" name="subject" onChange={(e)=>{setSubject(e.target.value)}} placeholder ='enter subject'  />
        <label>Enter Message</label>
        <textarea type="text" name="message" onChange={(e)=>{setMessage(e.target.value)}} placeholder ='enter message' />
        <label>Enter Phone Number</label>
        <input type="text" name="phno" placeholder ='enter phone number' pattern="[0-9]*" inputMode="numeric" id="" /> 
        <button className='Contact-submit' onSubmit={handleSubmit}>submit</button>
      </div>
     </div>
      </div>
    </div>
  )
}

export default AHelp
