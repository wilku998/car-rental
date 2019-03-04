import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Nav = () => {
  
  const scrollSite = (selector) => {
    document.querySelector(selector).scrollIntoView();
  }

  return (<nav className="nav">
    <div className="nav-content row">
      <ul className="nav__list">
        <li onClick={() => scrollSite('.about')}>About</li>
        <li onClick={() => scrollSite('.most-popular-container')}>Most popular</li>
        <li onClick={() => scrollSite('.all-cars')}>All cars</li>
        <li onClick={() => scrollSite('.contact')}>Contact</li>
      </ul>
    </div>
  </nav>
)};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Nav);
