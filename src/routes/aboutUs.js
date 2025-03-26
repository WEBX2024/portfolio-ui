import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';


const aboutUs = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="About." text="This is me"/>
      <Footer/>
    </div>
  )
}

export default aboutUs;
