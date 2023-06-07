import React from 'react';
import { Card } from '@mui/material';

const SliderCard = () => {
  const cardStyle = {
    backgroundColor: 'white',
    backgroundPosition: 'center',
    height: '320px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    marginTop: '30px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  };

  const cards = [
    { id: 1, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg", name: "raghib" },
    { id: 2, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 122, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 22, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
    { id: 13, img: "https://m.media-amazon.com/images/I/61Smw3GdtZL._AC_SY200_.jpg" },
  ];

  return (
    <div style={cardStyle}>
      {cards.map((lalu) => (
        <Card key={lalu.id} style={{ backgroundColor: 'red', width: '200px', padding: '30px', border: '1px solid black' }}>
          <img style={imageStyle} src={lalu.img} alt="product" />
        </Card>
      ))}
    </div>
  );
};

export default SliderCard;
