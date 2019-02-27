import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Nav = ({ startLogout }) => (
  <nav className="nav">
    <div className="nav-content row">
      <ul className="nav__list">
        <li>About</li>
        <li>Most popular</li>
        <li>All cars</li>
        <li>Contact</li>
      </ul>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Nav);
