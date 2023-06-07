import React from 'react';
import { Card, Typography } from '@mui/material';


const MiddlePanel = () => {
  const containerStyle = {
    height: '350px',
    width: '330px',
    display: 'flex',
    justifyContent: 'flex-start', // Align items along the start of the main axis (left side)
    alignItems: 'flex-start', // Align items along the start of the cross axis (top)
    border: '1px solid black',
    padding: '10px',
    marginLeft:'420px',
    marginTop:'-370px',
    // backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg")'
  
  
  
  };

  const cardStyle = {
    backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg")',
    backgroundPosition: 'center',
    height: '320px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
    marginTop:'30px',
    width:'100%',
   
  };

  return (
    <div style={containerStyle}>
        <Typography style={{ fontFamily: 'Arial', fontSize: '21px', fontWeight: 'bold' , position: 'absolute', color:'black'}} >Up to 70% off | Clearance store</Typography>
        <Card style={cardStyle}>
          
        </Card>

    
    </div>
  );
};

export default MiddlePanel;
