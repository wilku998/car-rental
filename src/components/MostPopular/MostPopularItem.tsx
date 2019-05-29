import * as React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../../store/actions';
import CarI from '../../interfaces/Car';

interface MostPopularItemPropsI {
	car: CarI;
	num: number;
	transform: string;
	openModal: (id: string) => boolean;
}

const MostPopularItem = ({ car, num, openModal, transform }: MostPopularItemPropsI) => {
	const { name, version, image, info, id } = car;
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

	const onRentClick = () => {
		openModal(id);
	};

	return (
		<div
			style={{ transform }}
			data-src={image}
			className={`b-lazy image most-popular__item most-popular__item--${num}`}
		>
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
				<button className="button-1 most-popular__item__info__rent" onClick={onRentClick}>
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
