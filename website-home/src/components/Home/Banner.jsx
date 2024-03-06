// Banner.js

import React, { useState, useEffect } from 'react';
import p1 from '../../assets/p1.jpeg';
import p2 from '../../assets/p2.jpeg';
import p3 from '../../assets/p3.jpeg';
import p4 from '../../assets/p4.jpeg';
import './Banner.css';

function Banner() {
  const images = [p1, p2, p3, p4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Image Slider</h3>
      <div className="banner-container">
        <img
          src={images[currentImageIndex]}
          alt={`Banner ${currentImageIndex + 1}`}
          className="banner-image"
        />
        <div className="banner-text">
          <h2>Join Us in Our Big future.</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
