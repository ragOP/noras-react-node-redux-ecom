import React, { useState } from 'react';
import { Card, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg", prodcutname: "raghib" },
    { id: 2, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 122, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 22, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 13, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg",prodcutname: "sayem"  },
    { id: 1, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg", prodcutname: "raghib" },
    { id: 2, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 122, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 22, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 13, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg",prodcutname: "sayem"  },
  ]; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '320px', marginTop: '30px', border: '1px solid black', overflow: 'hidden' }}>
      <IconButton style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} onClick={handlePrev}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} onClick={handleNext}>
        <NavigateNextIcon />
      </IconButton>
      <div style={{ display: 'flex', width: `${cards.length * 100}%`, transform: `translateX(-${currentIndex * (100 / cards.length)}%)`, transition: 'transform 0.3s ease' }}>
        {cards.map((card) => (
          <Card key={card.id} style={{ backgroundColor: 'red', width: '200px', height: '100%', padding: '30px', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ width: '200px', height: '200px', objectFit: 'cover' }} src={card.img} alt="product" />
            <h6 style={{ marginTop: '10px' }}>{card.name}</h6>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Slider;
