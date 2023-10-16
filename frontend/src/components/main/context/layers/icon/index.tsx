// React imports
import { useContext, createContext } from 'react';

// App imports
import { propertyDict } from '../../../utils/property';

// Third party imports
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { IconLayer } from 'deck.gl';

const IconLayerContext: React.Context<any> = createContext(null)

export const useIconLayer = () => {
	return (
		useContext(IconLayerContext)
	)
}

export const IconLayerProvider = ({children}: any) => {
	const iconMapping = 'static/components/map/icons/mapping.json';
	const iconAtlas = 'static/components/map/icons/atlas.png';

	const iconLayer = 
		new IconLayer({
			id: 'property-icon',
			data: propertyDict,
			pickable: true,
			getPosition: (d: any) => d.coordinates.split(",").reverse().map((item: any) => parseFloat(item)),
			iconAtlas,
			iconMapping,
			getIcon: (d: any) => 
				d.disponivel === "1" ?
				"marker-yellow" :
				"marker-green",
			getSize: (d: any) => 40,
			sizeUnits: 'meters',
			sizeScale: 20,
			sizeMinPixels: 30,
		});
	return (
		<IconLayerContext.Provider value={{ iconLayer }}>
			{children}
		</IconLayerContext.Provider>
	)
}

IconLayerContext.displayName = "IconLayerContext";