import './Donate.css';
import axios from "axios";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Membership() {
  const [Bronze] = useState({
    name: "Bronze Membership",
    author: "Pet Link",
    img: "https://s3.us-east-2.wasabisys.com/srmehranclub/2017/09/BRONZE.png",
    price: 250,
  });

  const [Silver] = useState({
    name: "Silver Membership",
    author: "Pet Link",
    img: "https://toyoos.com/wp-content/uploads/2018/07/Silver-Membership.png",
    price: 500,
  });

  const [Gold] = useState({
    name: "Gold Membership",
    author: "Pet Link",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/EL/AE/AP/181507398/gold-membership.png",
    price: 1000,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_06GeKary0jkcOO",
      amount: data.amount,
      currency: data.currency,
      name: "Pet Link",
      description: "Test Transaction",
      image: data.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyurl = "https://localhost:8000/api/payment/verify";
          const { data } = await axios.post(verifyurl, response);
          console.log(data);
        } catch (error) {
          console.log(error)
        }
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (amount) => {
    try {
      const orderUrl = "http://localhost:8000/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: amount });
      console.log(data);
      initPayment(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="navbar">
       <Navbar></Navbar>
       </div>
      <div className="App">
        {/* Bronze Membership */}
        <div className="book_contanier">
          <img src={Bronze.img} alt="logo" className='book_img' />
          <p className='book_name'>{Bronze.name}</p>
          <p className="book_author">Buy {Bronze.author}</p>
          <p className="book_price">
            price: <span>&#x20B9; {Bronze.price}</span>
          </p>
          <button onClick={() => handlePayment(Bronze.price)} className='buy_btn'>
            Pay {Bronze.price}
          </button>
        </div>
        {/* Silver Membership */}
        <div className="book_contanier">
          <img src={Silver.img} alt="logo" className='book_img' />
          <p className='book_name'>{Silver.name}</p>
          <p className="book_author">Buy {Silver.author}</p>
          <p className="book_price">
            price: <span>&#x20B9; {Silver.price}</span>
          </p>
          <button onClick={() => handlePayment(Silver.price)} className='buy_btn'>
            Pay {Silver.price}
          </button>
        </div>
        {/* Gold Membership */}
        <div className="book_contanier">
          <img src={Gold.img} alt="logo" className='book_img' />
          <p className='book_name'>{Gold.name}</p>
          <p className="book_author">Buy {Gold.author}</p>
          <p className="book_price">
            price: <span>&#x20B9; {Gold.price}</span>
          </p>
          <button onClick={() => handlePayment(Gold.price)} className='buy_btn'>
            Pay {Gold.price}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
