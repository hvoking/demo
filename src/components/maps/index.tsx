// React imports
import { useCallback } from 'react';

// App imports
import { Tooltip } from './tooltip';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { useIconLayer } from 'context/icon';

// Third-party imports
import { Map, useControl, NavigationControl } from 'react-map-gl';
import { DeckProps } from '@deck.gl/core/typed';

import { MapboxOverlay } from '@deck.gl/mapbox/typed';
import 'mapbox-gl/dist/mapbox-gl.css';

const DeckGLOverlay = (props: DeckProps) => {
  const deck = useControl<any>(() => new MapboxOverlay(props));
  deck.setProps(props);
  return null;
}

export const MapContainer = () => {
	const { viewport, setViewport, mapRef, mapStyle } = useGeo();
	const { iconLayer } = useIconLayer();

	const layers: any = [ iconLayer ];

	const onDblClick = useCallback((event: any) => {
		const lng = event.lngLat.lng;
		const lat = event.lngLat.lat;
		setViewport((prev: any) => ({...prev, longitude: lng, latitude: lat }));
	}, []);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
			>
				<DeckGLOverlay layers={layers} glOptions={{preserveDrawingBuffer: true}}/>
				<Tooltip/>
				<NavigationControl/>
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";