import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

export const Header = ({ startLogout }) => (
  <header className="header" style={{background: 'url(./images/header.jpg) center/cover'}}>
    <Nav />
    <div className="header__content">
      <h2>CarRental.</h2>
      <span>From the passion of motoring</span>
      <button className="button-1">View offer</button>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);