import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import MyTextField from '../pages/MyTextField';


const Trips = () => {
    const location = useLocation();
    const fromValue = location.state.fromValue;
    const toValue = location.state.toValue;
    const radioValue  = location.state.radioValue ;
    const detailValue  = location.state.detailValue ;
    const dateValue  = location.state.dateValue ;
    const numAdults  = location.state.numAdults ;

    
    console.log('fromValues',fromValue)
    console.log('toValues',toValue )
    console.log('radioValue',radioValue )
    console.log('detailValue',detailValue )
    console.log('dateValue',dateValue )
    console.log('numAdults',numAdults )
    

  return (
    <>
      <Navbar />
    <h1>from={fromValue.label}</h1>
    <h2>to={toValue.label}</h2>
    <h2>on way={radioValue}</h2>
    <h2>date={dateValue}</h2>
    <h2>detail={detailValue}</h2>
    <h2>Adults={numAdults}</h2>

    </>
  );
}

export default Trips;
