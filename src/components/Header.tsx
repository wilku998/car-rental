import * as React from 'react';
import Nav from './Nav';

export const Header = () => (
	<header className="header b-lazy image" data-src="./images/header.jpg" style={{}}>
		<Nav />
		<div className="header__content">
			<h2>CarRental.</h2>
			<span>From the passion of motoring</span>
			<button className="button-1" onClick={() => document.querySelector('.all-cars').scrollIntoView()}>
				View offer
			</button>
		</div>
	</header>
);

export default Header;
