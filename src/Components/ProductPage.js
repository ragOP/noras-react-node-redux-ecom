import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const productStyles = {
    container: {
      display: 'flex',
    },
    productCard: {
      position: 'relative',
      width: '320px',
      height: '500px',
      marginTop: '30px',
      border: '1px solid black',
      overflow: 'hidden',
    },
    image: {
      width: '50%',
      height: '50%',
      marginLeft: '60px',
    },
    title: {
      marginTop: '10px',
      marginLeft: '90px',
    },
    description: {
      marginTop: '10px',
      marginLeft: '10px',
    },
    price: {
      marginTop: '10px',
      marginLeft: '10px',
    },
  };

  const products = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/41Mt08WQZCL._AC_UL600_FMwebp_QL65_.jpg',
      title: "saaya",
      desc: "Santosh Enterprises Presents Women's Silk Sleeveless A Line Kurta with Palazzo and Organza Dupatta Set",
      price: "₹ 1125",
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/41Mt08WQZCL._AC_UL600_FMwebp_QL65_.jpg',
      title: "Generic",
      desc: "Santosh Enterprises Presents Women's Silk Sleeveless A Line Kurta with Palazzo and Organza Dupatta Set",
      price: "₹ 1125",
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/41bBb88jlcL.jpg',
      title: "Generic",
      desc: "Santosh Enterprises Presents Women's Silk Sleeveless A Line Kurta with Palazzo and Organza Dupatta Set",
      price: "₹ 1125",
    },
  ];

  return (
    <div style={productStyles.container}>
      {products.map((product) => (
        <div
          style={productStyles.productCard}
          key={product.id}
          onClick={() => navigate('/ProductDetail', { state: { item: product.id,img:product.img } })}
        >
          <img style={productStyles.image} src={product.img} alt="product" />
          <h4 style={productStyles.title}>{product.title}</h4>
          <h3 style={productStyles.description}>{product.desc}</h3>
          <h3 style={productStyles.price}>{product.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
