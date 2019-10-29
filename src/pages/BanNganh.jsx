import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BanNganhs from '../components/BanNganhs.jsx'


function BanNganh() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <BanNganhs/>
      <Footer/>
    </div>
  );
}

export default BanNganh
