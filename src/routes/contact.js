import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';

const contact = () => {
  return (
    <div>
      <Navbar/> 
      <Heroimg2 heading="Contact Me." text="Go through the page"/>
      <Footer/>
    </div>
  )
}

export default contact;
