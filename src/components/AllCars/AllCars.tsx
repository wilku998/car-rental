import * as React from 'react';
import { allCarsData } from '../../data/data';
import { connect } from 'react-redux';
import { bLazy } from '../../app';

import CarInterface from '../../interfaces/Car';
import AllCarsItem from './AllCarsItem';

const { useState, useEffect } = React;

interface AllCarsProps {
	windowWidth: number;
}

const AllCars = ({ windowWidth }: AllCarsProps) => {
	const [ hideAnimation, setHideAnimation ] = useState(false);
	const [ allVisible, setAllVisible ] = useState(false);

	const threeCars = allCarsData.slice(0, windowWidth <= 800 && windowWidth > 600 ? 4 : 3);
	const restOfCars = allCarsData.slice(windowWidth <= 800 && windowWidth > 600 ? 4 : 3);

	useEffect(
		() => {
			if (allVisible) {
				document.querySelector('.all-cars__content--more').scrollIntoView({ inline: 'start' });
				bLazy.revalidate();
			}
		},
		[ allVisible ]
	);

	const toggleAllVisble = () => {
		if (allVisible) {
			setHideAnimation(true);
			document.getElementById('all-cars__title').scrollIntoView(true);

			setTimeout(() => {
				setHideAnimation(false);
				setAllVisible(false);
			}, 1000);
		} else {
			setAllVisible(true);
		}
	};

	const renderItems = (arr: Array<CarInterface>, hideAnimation: boolean, more: boolean) => {
		return (
			<div
				className={`all-cars__content ${more
					? `all-cars__content--more ${hideAnimation ? 'all-cars__content--more--hide' : ''}`
					: ''}`}
			>
				{arr.map((e, i) => <AllCarsItem key={i} car={e} />)}
			</div>
		);
	};

	return (
		<div className="all-cars row">
			<h1 id="all-cars__title" className="title">
				All cars
			</h1>
			{renderItems(threeCars, hideAnimation, false)}
			{allVisible && renderItems(restOfCars, hideAnimation, true)}
			{!hideAnimation && (
				<button className="all-cars__button button-2" onClick={toggleAllVisble}>
					{allVisible ? 'Hide' : 'See more'}
				</button>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	windowWidth: state.windowWidth
});

export default connect(mapStateToProps)(AllCars);
