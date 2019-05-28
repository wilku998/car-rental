import * as React from 'react';
import { connect } from 'react-redux';

import CarInterface from '../../interfaces/Car'
import { toggleModal } from '../../store/actions';

interface AllCarsItemProps {
	car: CarInterface;
	openModal: (id: string) => boolean;
}

const AllCarsItem = ({ car, openModal }: AllCarsItemProps) => {
	const { imageXS, info, id, name } = car;
	const { priceForDay, engine, yearOfProduction, maximumSpeed, typeOfDrive } = info;

	const onRentClick = () => {
		openModal(id);
	};

	return (
		<div className="all-cars__item">
			<div className="b-lazy image all-cars__item__top" data-src={imageXS} />
			<h3 className="all-cars__item__title">{name}</h3>
			<ul className="all-cars__item__list">
				<li>Price for a day: {priceForDay}$</li>
				<li>Engine: {engine}</li>
				<li>Year of production: {yearOfProduction}</li>
				<li>Maxiumum speed: {maximumSpeed} km/h</li>
				<li>Type of drive: {typeOfDrive}</li>
			</ul>
			<button className="button-1 button-1--dark all-cars__item__button" onClick={onRentClick}>
				Rent
			</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch: any) => ({
	openModal: (id: string) => dispatch(toggleModal(id))
});

export default connect(undefined, mapDispatchToProps)(AllCarsItem);
