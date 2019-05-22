import * as React from 'react';
import MostPopular from './MostPopular';
import Header from './Header'
import About from './About'
import AllCars from './AllCars'
import Rent from './Rent'
import Contact from './Contact'
import Footer from './Footer'

const Dashbaord = (props) => (
    <div>
        <Rent />
        <Header />
        <About />
        <MostPopular />
        <AllCars />
        <Contact />
        <Footer />
    </div>
)

export default Dashbaord;