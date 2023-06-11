import { Card } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftPanel = () => {
  const navigate = useNavigate();
  const containerStyle = {
    height: '350px',
    width: '330px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '10px',
    border: '1px solid black',
    padding: '10px',
    marginTop: '50px',
    marginLeft: '30px',
  };

  const cardStyle = {
    backgroundImage: 'url("https://cdn.stocksnap.io/img-thumbs/280h/seat-airplane_OAEMBYKPJC.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  };
  const cardStyleTwo = {
    backgroundImage: 'url("https://m.media-amazon.com/images/I/51Hrw0FWpbL._AC_UL480_QL65_.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        aaaaaa
      </Card>
      <Card  onClick={()=>navigate('/lamp')}style={cardStyleTwo}>
       Lamp
      </Card>
      <Card style={cardStyle}>
        cccccccccccccc
      </Card>
      <Card style={cardStyle}>
        ddddddddddd
      </Card>
    </div>
  );
};

export default LeftPanel;
