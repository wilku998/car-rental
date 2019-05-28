import * as React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../store/actions';
import CarInterface from '../../interfaces/Car';

interface MostPopularItemProps {
	car: CarInterface;
	num: number;
	openModal: (id: string) => boolean;
}

const MostPopularItem = ({ car, num, openModal }: MostPopularItemProps) => {
	const { name, version, image, info } = car;
	const {
		priceForDay,
		engine,
		typeOfEngine,
		trunkCapacity,
		typeOfDrive,
		maximumSpeed,
		doors,
		persons,
		color,
		yearOfProduction
	} = info;
	return (
		<div data-src={image} className={`b-lazy image most-popular__item most-popular__item--${num}`}>
			<div className="most-popular__item__info">
				<h2 className="most-popular__item__info__name">
					{name}
					<span className="most-popular__item__info__ver">{version}</span>
				</h2>
				<ul className="list">
					<li>{`price for a day: ${priceForDay}$`}</li>
					<li>{`engine: ${engine}`}</li>
					<li>{`type of engine: ${typeOfEngine}`}</li>
					<li>{`trunk capacity: ${trunkCapacity}L`}</li>
					<li>{`type of drive: ${typeOfDrive}`}</li>
					<li>{`maximum speed: ${maximumSpeed} km/h`}</li>
					<li>{`doors: ${doors}`}</li>
					<li>{`persons: ${persons}`}</li>
					<li>{`color: ${color}`}</li>
					<li>{`year of production: ${yearOfProduction}`}</li>
				</ul>
				<button className="button-1 most-popular__item__info__rent" onClick={openModal}>
					<span>Rent</span>
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	openModal: (id: string) => dispatch(toggleModal(id))
});

export default connect(undefined, mapDispatchToProps)(MostPopularItem);
