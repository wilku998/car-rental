import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as aos from 'aos';
import * as Blazy from 'blazy';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import 'aos/dist/aos.css';

import { setWindowWidth } from './store/actions'
import configureStore from './store/configureStore';
import Dashboard from './components/Dashboard';
import './styles/styles.scss';

export const bLazy = new Blazy({
	success: () => { },
});

aos.init({
	duration: 1000
});

const store = configureStore();

store.dispatch(setWindowWidth(document.documentElement.clientWidth));

window.addEventListener('resize', () => {
	store.dispatch(setWindowWidth(document.documentElement.clientWidth));
});

const app = (
	<Provider store={store}>
		<Dashboard />
	</Provider>
);

render(app, document.getElementById('app'));

function initMap() {
	let uluru = {lat: 51.8403400, lng: 16.5749400};
	let map = new google.maps.Map(
	    document.querySelector('.contact__map'), {zoom: 10, center: uluru});
	let marker = new google.maps.Marker({position: uluru, map: map});
}

window.initMap = initMap;




