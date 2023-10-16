// App imports
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { SizesProvider } from './sizes';
import { LayersProvider } from './layers';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <SizesProvider>
    <LayersProvider>
      {children}
    </LayersProvider>
    </SizesProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";