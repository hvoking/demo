// App imports
import { ReCenter } from './reCenter';
import './styles.scss';

// Context imports
import { useGeo } from '../../context/filters/geo';

// Third party imports
import { NavigationControl, GeolocateControl } from 'react-map-gl';

export const MapControllers = () => {
	const { viewport, setViewport, placeCoordinates, setPlaceCoordinates } = useGeo();
	const onGeolocate = (e: any) => {
		setPlaceCoordinates({
			longitude: e.coords.longitude, 
			latitude: e.coords.latitude
		})
	}

	return (
		<>
			<NavigationControl/>
			<GeolocateControl
				showAccuracyCircle={false} 
				showUserLocation={false}
				positionOptions= {{enableHighAccuracy: true}}
				onGeolocate={onGeolocate}
			/>
			<ReCenter
				setViewport={setViewport} 
				viewport={viewport} 
				placeCoordinates={placeCoordinates}
			/>
		</>
	)
}

MapControllers.displayName="MapControllers";