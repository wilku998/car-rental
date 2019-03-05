import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './styles/styles.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000
});


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

function initMap(){
  
  let uluru = {lat: 51.8403400, lng: 16.5749400};

  let map = new google.maps.Map(
      document.querySelector('.contact__map'), {zoom: 10, center: uluru});

  let marker = new google.maps.Marker({position: uluru, map: map});

}

window.initMap = initMap;

const setWindowWidth = (windowWidth) => ({
  type: 'SET_WIDTH',
  windowWidth
})

store.dispatch(setWindowWidth(document.documentElement.clientWidth))

window.addEventListener(('resize'), () => {
  store.dispatch(setWindowWidth(document.documentElement.clientWidth))
})
