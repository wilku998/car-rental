import React from 'react';
import Nav from './Nav';

export const Header = ({ startLogout }) => (
  <header className="header" style={{background: 'url(./images/header.jpg) center/cover fixed'}}>
    <Nav />
    <div className="header__content">
      <h2>CarRental.</h2>
      <span>From the passion of motoring</span>
      <button className="button-1"
        onClick={() => document.querySelector('.all-cars').scrollIntoView()}>View offer
      </button>
    </div>
  </header>
);


export default Header;