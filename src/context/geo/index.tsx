// React imports
import { useState, useRef, useEffect, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>();
	
	const [ cityName, setCityName ] = useState<any>("brusque");
	const [ placeId, setPlaceId ] = useState<any>(null);
	
	const [ viewport, setViewport ] = useState(Locations.brusque);

	const [ geocodingLongitude, setGeocodingLongitude ] = useState<any>(null);
	const [ geocodingLatitude, setGeocodingLatitude ] = useState<any>(null);

	const mapStyle = "mapbox://styles/hvoking/clygh6abe01fv01qrd3y0105g";

	useEffect(() => {
	  mapRef.current?.flyTo({
	    center: [ viewport.longitude, viewport.latitude ],
	    zoom: viewport.zoom,
	    duration: 3000, 
	    essential: true,
	  });
	}, [ viewport ]);

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			placeId, setPlaceId, 
			viewport, setViewport,
			geocodingLongitude, setGeocodingLongitude,
			geocodingLatitude, setGeocodingLatitude,
			Locations,
			mapRef, mapStyle
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";