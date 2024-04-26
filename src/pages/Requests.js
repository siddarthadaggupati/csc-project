import React, { useState } from 'react'
import axios from 'axios'

function Requests() {
    const [number, setNumber] = useState('');
    const handleSubmit = () => {
        try{
            axios.post('http://localhost:8000/sendmessage', {
            number: number
        })
        .then(response => {
            console.log(response.data);
        })
        }
        catch(error){
            console.error('There was an error!', error);
        };
    }
    return (
        <div>
            <input type="number" name='number' onChange={(e) => { setNumber(e.target.value) }} />
            <button type='submit' onClick={handleSubmit}>send</button>
        </div>
    )
}

export default Requests
