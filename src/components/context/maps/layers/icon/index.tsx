// React imports
import { useContext, createContext } from 'react';

// Context imports
import { useTooltip } from '../../../../context/maps/tooltip';
import { useProperty } from '../../../../context/filters/property';

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
	const { setPropertyHoverInfo, setPropertyInfo, setActivePropertyInfo } = useTooltip();
	const { currentId, setCurrentId, propertyDict } = useProperty();

	const onClick = (info: any) => {
  		setActivePropertyInfo(true);
  		info.object && setPropertyInfo(info.object);
  	};

  	const onHover = (info: any) => {
  		info.object && setCurrentId(info.object.codigo);
  		!info.object && setCurrentId(null);
  		setPropertyHoverInfo(info);
  	}

	const iconMapping = process.env.PUBLIC_URL + '/static/icons/mapping.json';
	const iconAtlas = process.env.PUBLIC_URL + '/static/icons/atlas.png';

	const iconLayer = 
		new IconLayer({
			id: 'property-icon',
			data: propertyDict,
			pickable: true,
			getPosition: (d: any) => d.coordinates.split(",").reverse().map((item: any) => parseFloat(item)),
			iconAtlas,
			iconMapping,
			getIcon: (d: any) => 
				d.codigo === currentId ?
				"marker-red" :
				d.disponivel === "1" ?
				"marker-green" :
				"marker-yellow",
			getSize: (d: any) => 40,
			sizeUnits: 'meters',
			sizeScale: 20,
			sizeMinPixels: 30,
			onHover,
		    onClick: (info: any) => onClick(info),
		    updateTriggers: {getIcon: [currentId]}
		});
	return (
		<IconLayerContext.Provider value={{ iconLayer }}>
			{children}
		</IconLayerContext.Provider>
	)
}

IconLayerContext.displayName = "IconLayerContext";