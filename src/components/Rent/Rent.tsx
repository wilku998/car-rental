import * as React from 'react';
import * as Modal from 'react-modal';
import { connect } from 'react-redux';
import { allCarsData } from '../../data/data';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

import RentForm from './RentForm';
import styles from './styles';
import { toggleModal } from '../../store/actions';
import CarI from '../../interfaces/Car';

const { useState } = React;

interface RentPropsI {
	car: CarI;
	modalIsOpen: boolean;
	closeModal: () => boolean;
}

const Rent = ({ car, modalIsOpen, closeModal }: RentPropsI) => {
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

	const limitStart = moment();
	const limitEnd = moment().add(60, 'days');

	const [ calendarSelectedDays, setCalendarSelectedDays ] = useState({
		startDate: moment(),
		endDate: moment().add(1, 'days')
	});
	const [ price, setPrice ] = useState({ price: priceForDay, discount: 0 });
	const [ discountsVisible, setDiscountsVisible ] = useState(false);
	const [ focusedInput, setFocusedInput ] = useState(undefined);

	const changePrice = (days: number): void => {
		let discount;
		if (days >= 31) {
			discount = 0.6;
		} else if (days >= 15) {
			discount = 0.45;
		} else if (days >= 8) {
			discount = 0.3;
		} else if (days >= 4) {
			discount = 0.15;
		} else {
			discount = 0;
		}

		let basis = days * car.info.priceForDay;
		let price = basis - basis * discount;
		setPrice({ price, discount });
	};

	const toggleDiscounts = (): void => {
		setDiscountsVisible(!discountsVisible);
	};

	const setDates = ({ startDate, endDate }: { startDate: any; endDate: any }): void => {
		setCalendarSelectedDays({ startDate, endDate });

		if (startDate && endDate) {
			const rangeOfDays = moment.duration(endDate.diff(startDate));
			changePrice(rangeOfDays.asDays());
		} else {
			setPrice({ price: 0, discount: 0 });
		}
	};

	const isOutsideRange = (day: any): boolean => {
		if (focusedInput === 'endDate') {
			return (
				moment.max(day, limitEnd).format() === day.format() ||
				moment.min(day, limitStart).format() === day.format()
			);
		} else {
			return (
				moment.max(day, limitEnd).format() === day.format() ||
				moment.min(day, limitStart).format() === day.format()
			);
		}
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Rent car"
			style={styles}
			ariaHideApp={false}
		>
			<div className="rent" style={{ background: `url(${image}) center/cover` }}>
				<i className="icon-cancel rent__cancel" onClick={() => closeModal()} />
				<div className="rent__item rent__item--left">
					<h2 className="rent__title">{name}</h2>
					<span className="rent__version">{version}</span>
					<div className="rent__list-container">
						<ul className="list rent__list">
							<li>{`price for a day: ${priceForDay}$`}</li>
							<li>{`engine: ${engine}`}</li>
							<li>{`type of engine: ${typeOfEngine}`}</li>
							<li>{`trunk capacity: ${trunkCapacity}L`}</li>
							<li>{`type of drive: ${typeOfDrive}`}</li>
						</ul>
						<ul className="list rent__list">
							<li>{`maximum speed: ${maximumSpeed} km/h`}</li>
							<li>{`doors: ${doors}`}</li>
							<li>{`persons: ${persons}`}</li>
							<li>{`color: ${color}`}</li>
							<li>{`year of production: ${yearOfProduction}`}</li>
						</ul>
					</div>
				</div>

				<div className="rent__item rent__item--right">
					<div className="rent__price">
						<span className="rent__price__header"> {`Price is: ${price.price}$`}</span>
						<label className="rent__price__label">
							<span>Set range of days</span>
							<DateRangePicker
								startDate={calendarSelectedDays.startDate}
								endDate={calendarSelectedDays.endDate}
								onDatesChange={setDates}
								onFocusChange={setFocusedInput}
								focusedInput={focusedInput}
								isOutsideRange={isOutsideRange}
								endDateId="3123"
								startDateId="3623"
								small={true}
								numberOfMonths={1}
							/>
						</label>
						<div className="rent__price__discount">
							{`Your discount: ${price.discount * 100}%`}
							<button onClick={toggleDiscounts}>discounts</button>
						</div>
						{discountsVisible && (
							<div className="rent__discounts">
								<ul className="list rent__list rent__list--small">
									<li>1-6 days: 0%</li>
									<li>14-29 days: 30%</li>
								</ul>
								<ul className="list rent__list rent__list--small">
									<li>7-13 days: 15%</li>
									<li>30-60 days: 45%</li>
								</ul>
							</div>
						)}
					</div>
					<RentForm price={price} />
				</div>
			</div>
		</Modal>
	);
};

const mapStateToProps = ({ id, modalIsOpen }: { id: string; modalIsOpen: boolean }) => {
	const car = allCarsData.find((e) => e.id === id);
	return {
		modalIsOpen: modalIsOpen,
		car
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	closeModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Rent);
