import React from 'react';
import MostPopular from '../components/MostPopular';
import Header from '../components/Header'
import About from '../components/About'
import AllCars from '../components/AllCars'
import Rent from '../components/Rent'

const Dashbaord = (props) => (
    <div>
        <Rent />
        <Header />
        <About />
        <MostPopular />
        <AllCars />
        <div className="fake"></div>
    </div>
)

export default Dashbaord;