import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../components/Navbar";
import "./Home.css";
import bg from '../images/homebg.png';
import Slideshow from '../components/Slideshow'; 
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

function Home() {
  const remainingRef = useRef(null); 
  const bgImageRef = useRef(null); 
  const [isMobile, setIsMobile] = useState(false);

  const resizeElements = () => {
    const remainingWidth = remainingRef.current.offsetWidth;
    //const remainingHeight = remainingRef.current.offsetHeight;
    if (bgImageRef.current) {
      bgImageRef.current.style.width = `${100}%`;
      bgImageRef.current.style.height = `${600}px`;
    }

    setIsMobile(remainingWidth <= 400 ); // Assuming 600px is the breakpoint for mobile size
  };

  useEffect(() => {
    window.addEventListener('resize', resizeElements);
    resizeElements(); 

    return () => {
      window.removeEventListener('resize', resizeElements);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="remaining" ref={remainingRef}>
        <div className="slider-show">
          <Slideshow></Slideshow> 
        </div>
        <img ref={bgImageRef} src={bg} alt='bg' className="responsive-image" />
        <h3 style={{ fontSize: isMobile ? '2rem' : '3rem' }}>
          Paws in Need <br /> Adopt A pet <br />Make A Difference <br />Help Animals
        </h3>
        {!isMobile && (
          <div className="get-started">
            <Button style={{ color: 'white', textTransform: 'none' }} component={Link} to='https://us-east-1lmfbd2cxv.auth.us-east-1.amazoncognito.com/login?client_id=2gja5lstl7a2gkfp7c5er3lj8s&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d2fc6wewvgqw0h.amplifyapp.com%2Fahome'>Get Involved<ArrowForwardIosIcon /></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
