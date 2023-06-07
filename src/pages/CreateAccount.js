import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Slider from './Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Slider />
      </div>
  <div style={{ flex: 1, backgroundImage:'url("https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Backgrounds-Solid-Color-For-Desktop.png")',backgroundPosition:'center' }}>
        <div style={{fontcolor:'black',fontFamily:'cursive',padding:'50px',textAlign:'center',fontSize:'25px'}}><b>Nooras </b></div><br/>

        <div style={{fontcolor:'#808080',fontFamily:'revert',fontSize:'30px',textAlign:'center',paddingBottom:'30px'}}>Create Account in Nooras</div>

        {/* <input  style={{ marginLeft:'200px'}}type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br> */}

        <TextField id="standard-basic" label="Username" variant="standard" style={{marginLeft:'270px'} }/>
        <TextField id="standard-basic" label="Password" variant="standard" style={{marginLeft:'270px'}} />
        {/* <input type="text"  variant="standard" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
        <Button variant="contained" style={{marginTop:'70px',marginLeft:'-130px'}}>Submit</Button>
        
         
      </div>
    </div>
  );
};

export default CreateAccount;
