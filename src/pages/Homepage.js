import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import LeftPanel from '../Components/LeftPanel';
import MiddlePanel from '../Components/MiddlePanel';
import RightPanel from '../Components/RightPanel';
import SliderCard from '../Components/SliderCard';


const Homepage = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <LeftPanel />
     <MiddlePanel/>
     {/* <img style={{height:'500px',marginLeft:'750px',display:'flex',flexDirection:'column',marginTop:'-370px'}} src='https://img.freepik.com/free-vector/flat-summer-sale-horizontal-banner-template-with-photo_23-2148929589.jpg?w=1060&t=st=1686082690~exp=1686083290~hmac=0b2346d60efd398f107026b9fbc256506228fb78fd822efa1b91208041701973'/> */}
     <RightPanel/>
     <SliderCard/>
    </>

  )
}

export default Homepage;