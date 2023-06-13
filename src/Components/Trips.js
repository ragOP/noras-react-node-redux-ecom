import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import MyTextField from '../pages/MyTextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';


const Trips = () => {
    const location = useLocation();
    const fromValue = location.state.fromValue;
    const toValue = location.state.toValue;
    const radioValue  = location.state.radioValue ;
    const detailValue  = location.state.detailValue ;
    const dateValue  = location.state.dateValue ;
    const numAdults  = location.state.numAdults ;
    const numInfants  = location.state.numInfants ;
    const selectedOption  = location.state.selectedOption ;

    const divStyle={
      width:'100%',
      height:'150px',
      // backgroundColor:'lightgray',
      border:'1px solid black',
      marginTop:'15px',
      display:'flex'
    };
    const overlayStyle = {
      position: "absolute",
      top: "20%",
      left: "3%",
      transform: "translate(-30%, -30%)",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "25px",
      width: "64px", // Adjust the width to accommodate the text
      height: "auto", // Allow the height to adjust based on content
      fontSize: "13px",
      border: "1px solid black",
      whiteSpace: "normal",
      wordBreak: "break-word",
      height:'13px'
    };
    


    
   
    

  return (
    <>
      <Navbar />
      <div style={divStyle}>
      <div style={{ display: 'flex', alignItems: 'center' ,marginTop:'-110px'}}>
  <Typography style={{ marginTop: '-1px' }}>{fromValue.label}</Typography>
  <ArrowForwardIcon style={{ top: '-10%', marginLeft: '8px' }} />
  <Typography>{toValue.label}</Typography>
</div>
      <div style={overlayStyle}>16th July </div>
     
      

      </div>
    <h1>from={fromValue.label}</h1>
    <h2>to={toValue.label}</h2>
    <h2>on way={radioValue}</h2>
    <h2>date={dateValue}</h2>
    <h2>detail={detailValue}</h2>
    <h2>Adults={numAdults}</h2>
    <h2>infant={numInfants}</h2>
    <h2>selected={selectedOption}</h2>

    </>
  );
}

export default Trips;
