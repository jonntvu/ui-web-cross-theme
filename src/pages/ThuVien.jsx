import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ThuViens from '../components/ThuViens.jsx'


function ThuVien() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <ThuViens/>
      <Footer/>
    </div>
  );
}

export default ThuVien
