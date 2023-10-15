// App imports
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';
import { SizesProvider } from './sizes';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
    <SizesProvider>
      {children}
    </SizesProvider>
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";