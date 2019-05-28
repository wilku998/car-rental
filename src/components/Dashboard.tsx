import * as React from 'react';
import MostPopular from './MostPopular/MostPopular';
import Header from './Header'
import About from './About'
import AllCars from './AllCars/AllCars'
import Rent from './Rent'
import Contact from './Contact'
import Footer from './Footer'

const Dashboard = () => (
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

export default Dashboard;