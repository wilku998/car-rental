import * as React from 'react';
import { isMobilePhone } from 'validator';

const { useState } = React;

interface RentFormPropsI {
	price: {
		price: number;
		discount: number;
	};
}

const RentForm = ({ price }: RentFormPropsI) => {
	const [ invalidInfo, setInvalidInfo ] = useState('');
	const [ submited, setSubmited ] = useState(false);

	const [ form, setFormValues ] = useState({
		name: {
			value: '',
			valid: false
		},
		surname: {
			value: '',
			valid: false
		},
		country: {
			value: '',
			valid: false
		},
		city: {
			value: '',
			valid: false
		},
		telephone: {
			value: '',
			valid: false
		}
	});

	const onFormChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value, name }: any = e.target;
		setFormValues({
			...form,
			[name]: {
				value,
				valid: name === 'telephone' ? isMobilePhone(value) : value.length <= 20 && value.length >= 3
			}
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		let invalidInfo = '';

		if (!submited) {
			let validation = true;
			Object.keys(form).forEach((key) => {
				if (!form[key].valid) {
					validation = false;
					invalidInfo = `${key} is invalid`;
				}
				if (form[key].value === '') {
					invalidInfo = `${key} is required`;
				}
			});

			if (price.price < 1) {
				invalidInfo = 'Set correctly range of days!';
				validation = false;
			}

			setSubmited(validation);
			setInvalidInfo(invalidInfo);
		}
	};

	return (
		<form className="rent__form" onSubmit={onSubmit}>
			{Object.keys(form).map((key) => (
				<label key={key}>
					<span>{key}</span>
					<input
						className={`input ${form[key].value !== ''
							? form[key].valid ? 'input--valid' : 'input--invalid'
							: ''}`}
						value={form[key].value}
						name={key}
						onChange={onFormChange}
						type="text"
					/>
				</label>
			))}

			<div className="rent__footer">
				{!submited ? (
					<button className="button-1 button-1--small button-1--dark rent__form__btn">Rent</button>
				) : (
					<span className="rent__info rent__info--submited">
						Form sent. Our consultant will contact you within 24 hours.
					</span>
				)}
				{invalidInfo !== '' && <span className="rent__info rent__info--invalid">{invalidInfo}</span>}
			</div>
		</form>
	);
};

export default RentForm;
