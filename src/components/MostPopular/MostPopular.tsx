import * as React from 'react';
import MostPopularItem from './MostPopularItem';
import { mostPopularData } from '../../data/data';

const { useEffect, useRef, useState } = React;
const MostPopular = () => {
	const [ position, setPosition ] = useState(1);
	const [ animated, setAnimated ] = useState(false);

	const componentRef = useRef();
	const containerRef = useRef();

	const changePosition = (sign: number) => {
		const newPosition = position + sign;
		if (newPosition <= 3 && newPosition >= 1) {
			setPosition(newPosition);
		}
	};

	const increasePosition = () => changePosition(1);
	const decreasePosition = () => changePosition(-1);

	const removeOnScroll = () => window.removeEventListener('scroll', onScroll);
	const onScroll = () => {
		const containerHeight = containerRef.current.offsetHeight;
		let windowPosition = containerRef.current.getBoundingClientRect().y;
		if (windowPosition < containerHeight / 2) {
			changePosition(1);
			removeOnScroll();
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			removeOnScroll();
		};
	}, []);

	return (
		<section id="most-popular" className="most-popular-container" ref={containerRef}>
			<h1 className="title most-popular__title">Most popular cars</h1>
			<div className="most-popular" ref={componentRef}>
				<div className="most-popular__pos">
					<div
						className={`most-popular__pos__item ${position === 1
							? 'most-popular__pos__item--visible'
							: ''}`}
					/>
					<div
						className={`most-popular__pos__item ${position === 2
							? 'most-popular__pos__item--visible'
							: ''}`}
					/>
					<div
						className={`most-popular__pos__item ${position === 3
							? 'most-popular__pos__item--visible'
							: ''}`}
					/>
				</div>
				<div className="most-popular__move-btn-container">
					<div className="most-popular__move-btn" onClick={decreasePosition}>
						<i className="icon-up-open-big" />
					</div>
					<div className="most-popular__move-btn" onClick={increasePosition}>
						<i className="icon-down-open-big" />
					</div>
				</div>

				{mostPopularData.map((e, i) => (
					<MostPopularItem
						key={i}
						car={e}
						num={i + 1}
						transform={`${position === i + 1
							? `translateY(-${i * 100}%)`
							: `translateY(-${(position - 1) * 100}%)`}`}
					/>
				))}
			</div>
		</section>
	);
};

export default MostPopular;
