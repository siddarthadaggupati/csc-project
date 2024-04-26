import React from 'react'
import AdminNav from '../components/AdminNav'
import axios from 'axios'
import './AddProduct.css'

function AddProduct() {

  const [link,setlink] = React.useState('');
  const [price,setprice] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (link !== '' && price !== '') {
      try {
        const response = await axios.post('https://pc-server-chi.vercel.app/addproduct', {
          'link': link,
          'price': price,
        });
  
        if (response.data === "datareceived") {
          alert('Product added');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    } else {
      alert("Provide valid link and price");
    }
  };
  
  return (
    <div>
      <div className="navbar">
        <AdminNav/>
      </div>
      <div className="remaining">
        <div className="addcontanier">
            <input type="text"  name='image' placeholder ='Enter Image Link' onChange={(e) => setlink(e.target.value)} />
            <input type='number' name='price' placeholder ='Enter Price' onChange={(e) => setprice(e.target.value)}/>
            <button type = 'submit' className='calculate-btn' onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
