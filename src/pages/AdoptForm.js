import {React ,useState} from 'react'
import Navbar from '../components/NavLog'
import axios from 'axios'
function AdoptForm() {

    const handleSubmit = (e)=>{
        try{
            const response = axios.post('https://pc-server-chi.vercel.app/adoptdata',{
                name: name,
                email: email,
                phno: phno,
                reason: reason,
                salary: salary,
                address: address
            })
            if(response.data === 'submit')
            {
                alert('Form Submitted')
            }
            else
            {
                alert('Error in Submitting Form, Try Again After Some Time')
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phno,setPhno] = useState('');
    const [reason,setReason] = useState('');
    const [salary,setSalary] = useState('');
    const [address,setAddress] = useState('');
    return (
        <div>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="remaining">
                <h1 style={{ color: 'black', marginRight: 'auto' }}>Adopt</h1>
                <div className="contact-page">
                    <div className="contact-info-contanier">
                        <label>Enter Name</label>
                        <input type="text" name="name" onChange={(e) => { setName(e.target.value) }} placeholder='Enter name' id="" />
                        <label>Enter email</label>
                        <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' id="" />
                        <label>Enter Phone Number</label>
                        <input type="number" name="phno" onChange={(e) => { setPhno(e.target.value) }} placeholder='Enter Phone Number' />
                        <label>Reason to Adopt</label>
                        <textarea type="text" name="reason" onChange={(e) => { setReason(e.target.value) }} placeholder='Enter Reason to Adopt' />
                        <label>Enter Salary</label>
                        <input type="text" name="phno" onChange={(e) => { setSalary(e.target.value) }} placeholder='Enter Salary' id="" />
                        <label>Enter Address</label>
                        <input type="text" name="address" onChange={(e) => { setAddress(e.target.value) }} placeholder='Enter Address' id="" />
                        <button className='Contact-submit' onClick={handleSubmit} >submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdoptForm
