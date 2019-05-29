import * as React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const point = { lat: 51.84034, lng: 16.57494 };

const MapContainer = ({ google }: {google: any}) => (
	<Map initialCenter={point} style={{ height: '100%', width: '100%' }} google={google} zoom={14}>
		<Marker position={point} />
	</Map>
);

export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_API_KEY
})(MapContainer);
