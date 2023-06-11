import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  const img=location.state.img;
  console.log('item', item);

  const containerStyle = {
    height: '550px',
    width: '450px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: '1px solid black',
    padding: '10px',
    marginLeft: '20px',
    marginTop: '50px',
    backgroundColor: 'lightgray',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        {/* <h3>Product ID: {item}</h3> */}
        <img style={imageStyle} src={img}/>
        
      </div>
    </>
  );
};

export default ProductDetail;
