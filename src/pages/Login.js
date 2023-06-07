import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Slider from './Slider';
import TextField from '@mui/material/TextField';
import UnstyledButtonsSimple from './UnstyledButtonsSimple';
import { Button, Typography } from '@mui/material';
// import CreateAccount from "./pages/CreateAccount";

const Login = () => {
  const navigate = useNavigate();
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();

  const handle = () => {
    if (email === 'r@gmail.com' && password === '00000') {
      navigate('/homepage');
    } else {
      alert('Wrong password');
    }
  };
  const handlerCreateAccount =()=>{
    navigate('/CreateAccount')
  };
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Slider />
      </div>
       
      <div style={{ flex: 1, backgroundImage:'url("https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Backgrounds-Solid-Color-For-Desktop.png")',backgroundPosition:'center' }}>
        <div style={{fontcolor:'black',fontFamily:'cursive',padding:'50px',textAlign:'center',fontSize:'25px'}}><b>Nooras </b></div><br/>

        <div style={{fontcolor:'#808080',fontFamily:'revert',fontSize:'30px',textAlign:'center',paddingBottom:'30px'}}>Welcome to Nooras</div>

        {/* <input  style={{ marginLeft:'200px'}}type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br> */}

        <TextField id="standard-basic" label="Username" variant="standard" style={{marginLeft:'270px'}} value={email} onChange={(e)=>Setemail(e.target.value)}/>
        <TextField id="standard-basic" label="Password" variant="standard" style={{marginLeft:'270px'}}  value={password} onChange={(e)=>Setpassword(e.target.value)} type='password' />
        {/* <input type="text"  variant="standard" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
        <Button variant="contained" style={{marginTop:'70px',marginLeft:'-130px'}} onClick={handle}>Submit</Button>
        <Typography style={{marginTop:'30px',marginLeft:'330px'}} onClick={handlerCreateAccount}>Create account</Typography>
         
      </div>
    </div>
  );
};

export default Login;
