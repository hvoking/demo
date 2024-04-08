// App imports
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { SizesProvider } from './sizes';
import { MapsProvider } from './maps';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <SizesProvider>
    <MapsProvider>
      {children}
    </MapsProvider>
    </SizesProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";