import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ContactUs from '../components/ContactUs.jsx'


function Contact() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default Contact
