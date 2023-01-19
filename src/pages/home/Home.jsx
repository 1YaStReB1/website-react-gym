import React from 'react'
import FAQs from '../../components/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import ScrollToTop from 'react-scroll-to-top'
import "./home.css"

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
      <ScrollToTop smooth />
    </>
    
  )
}

export default Home