import { Card, Typography } from '@mui/material';
import React from 'react';


const RightPanel = () => {
  const containerStyle = {
    height: '350px',
    width: '330px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridGap: '10px',
    border: '1px solid black',
    padding: '10px',
    marginTop:'-370px',
    marginLeft: '800px', 
  };

  const cardStyle = {
    backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg")',
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
    backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  };
  const cardStyleThree = {
    backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px',
  };
  const cardStyleFour = {
    backgroundImage: 'url("https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg")',
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
    <Typography style={{ fontFamily: 'Arial', fontSize: '20px', fontWeight: 'bold' , position: 'absolute',marginTop:'-18px' ,color:'black',}} >Women</Typography>
      <Card style={cardStyle}>
      </Card>
      <Card style={cardStyleTwo}>
    
      </Card>
      <Card style={cardStyleThree}>
    
      </Card>
      <Card style={cardStyleFour}>
    
      </Card>
    </div>
  );
};

export default RightPanel;
