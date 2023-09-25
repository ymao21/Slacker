import React, { useState, useEffect } from 'react';

import landingPageImage from '../../assets/landingPage.png';
import landingPageImage2 from '../../assets/landingPage2.png';
import landingPageImage3 from '../../assets/landingPage3.png';
import landingPageImage4 from '../../assets/landingPage4.png';

function ImageRotator() {
  const imageSources = [
    landingPageImage,
    landingPageImage2,
    landingPageImage3,
    landingPageImage4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageSources.length);
  };

  useEffect(() => {
    const interval = setInterval(updateImage, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={imageSources[currentImageIndex]}
      alt="Landing Page"
      className="landingimage"
    />
  );
}

export default ImageRotator;
