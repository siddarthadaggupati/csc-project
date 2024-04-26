import React from 'react'
import AdminNav from '../components/AdminNav'
import axios from 'axios'
import './ShowRequests.css'
function ShowRequests() {

    const handleSubmit=()=>{
       const response =  axios.post('http://localhost:8000/sendmessage',{
            phno: 9000834981
        })
        if(response.data ==='sent')
        {
            alert('person added');
        }
    }
    return (
        <div>
            <div className="navbar">
                <AdminNav/>
            </div>
            <div className="remaining">
                <div className="contanier">
                    <p>Name: Siddartha</p>
                    <p>email: Siddarthadaggupati@gmail.com</p>
                    <p>phno: 9000834981</p>
                    <p>salary: 120000</p>
                    <button onClick={handleSubmit}>Accpect</button>
                </div>
            </div>
        </div>
    )
}

export default ShowRequests
