import React, { useEffect, useRef, useState } from 'react';
import NavLog from "../components/AdminNav";
import "./Home.css";
import bg from '../images/homebg.png';
import Slideshow from '../components/Slideshow'; 

function AdminHome() {
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
        <NavLog></NavLog>
      </div>
      <div className="remaining" ref={remainingRef}>
        <div className="slider-show">
          <Slideshow></Slideshow> 
        </div>
        <img ref={bgImageRef} src={bg} alt='bg' className="responsive-image" />
        <h3 style={{ fontSize: isMobile ? '2rem' : '3rem' }}>
          Paws in Need <br /> Adopt A pet Make Difference <br />Make A Difference <br />Help Animals
        </h3>
      </div>
    </div>
  );
}

export default AdminHome;
