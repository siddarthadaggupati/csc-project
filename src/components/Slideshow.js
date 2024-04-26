import React, { useEffect, useRef } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img from '../images/img2.png';

const fadeImages = [
  {
    url: 'https://cdni.iconscout.com/illustration/premium/thumb/pet-adopt-7161590-5829770.png?f=webp',
    caption: 'First Slide'
  },
  {
    url: img,
    caption: 'Second Slide'
  },
  {
    url: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwYWRvcHRpb258ZW58MHx8MHx8fDA%3D',
    caption: 'Third Slide'
  },
];

const Slideshow = () => {
  const slideContainerRef = useRef(null);
  const resizeImages = () => {
    const containerWidth = slideContainerRef.current.offsetWidth;
    const containerHeight = slideContainerRef.current.offsetHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    fadeImages.forEach((fadeImage) => {
      const image = new Image(); 
      image.onload = () => {

        let imageWidth, imageHeight;
        if (image.width / image.height > containerAspectRatio) 
        {
          imageWidth = containerWidth;
          imageHeight = imageWidth / image.width * image.height;
        } 
        else 
        {
          imageHeight = containerHeight;
          imageWidth = imageHeight / image.height * image.width;
        }

        const imageRef = document.querySelector(`img[src="${fadeImage.url}"]`);
        if (imageRef) 
        {
          imageRef.style.width = `${75}%`;
          imageRef.style.height = `${300}px`;
        }
      };
      image.src = fadeImage.url; 
    });
  };

  // Use useEffect to trigger resizing on component mount and window resize
  useEffect(() => 
  {
    resizeImages();
    window.addEventListener('resize', resizeImages);

    return () => 
    {
      window.removeEventListener('resize', resizeImages);
    };
  }, []);

  return (
    <div className="slide-container" ref={slideContainerRef}>
      <Fade autoplay={true} duration={2000} indicators={false} arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ borderRadius: '20px' }} // Maintain rounded corners
              src={fadeImage.url}
              alt="img"
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
