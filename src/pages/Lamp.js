import React from 'react'
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import ProductPage from '../Components/ProductPage';

const Lamp = () => {
  const navigate = useNavigate();
  return (
    <>
       <Navbar/>
       <div style={{ width: '250px', height: '600px', marginTop: '30px',marginLeft:'10px', border: '1px solid black'}}></div>
       <div style={{ width: '80%', height: '320px', marginTop: '-600px', border: '1px solid black', overflow: 'hidden',marginLeft:'300px' }}>
        <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b219475b-3488-4fd8-b3ce-c62bf7176049._CR0,0,1200,628_SX507_QL70_.png" onClick={()=>navigate('/ProductPage')} style={{height:'100%'}}/>
       </div>

       <div style={{marginLeft:'300px'}}><ProductPage id={1}/>
        
       </div>
    </>
    
  )
}

export default Lamp
