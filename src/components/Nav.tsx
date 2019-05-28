import * as React from 'react';

export default () => {
	const scrollSite = (e: any) => {
		const scrollto = e.target.dataset.scrollto;
		document.querySelector(scrollto).scrollIntoView();
	};

	return (
		<nav className="nav">
			<div className="nav-content row">
				<ul className="nav__list">
					<li data-scrollto=".about" onClick={scrollSite}>
						About
					</li>
					<li data-scrollto=".most-popular-container" onClick={scrollSite}>
						Most popular
					</li>
					<li data-scrollto=".all-cars" onClick={scrollSite}>
						All cars
					</li>
					<li data-scrollto=".contact" onClick={scrollSite}>
						Contact
					</li>
				</ul>
			</div>
		</nav>
	);
};
