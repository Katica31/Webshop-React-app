import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { Slider } from '../components/Slider';
import Categories from '../components/Categories';
import { Products } from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
        <Announcement backg="black"></Announcement>
        <Navbar backg="black"/>
        <Slider backg="black"/>
        <Categories backg="black"/>
        <Products backg="black"/>
        <Newsletter backg="black" />
        <Footer backg="black"></Footer>
    </div>
  )
}

export default Home;