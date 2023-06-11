import React from 'react'
import Navbar from '../Components/Navbar'

const Lamp = () => {
  return (
    <>
       <Navbar/>
       <div style={{ width: '250px', height: '600px', marginTop: '30px', border: '1px solid black'}}></div>
       <div style={{ position: 'relative', width: '100%', height: '320px', marginTop: '30px', border: '1px solid black', overflow: 'hidden' }}></div>
    </>
    
  )
}

export default Lamp
