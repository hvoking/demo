// App imports
import { FiltersProvider } from './filters';
import { MapboxProvider } from './mapbox';

export const MainProvider = ({children}: any) => {
  return (
    <FiltersProvider>
    <MapboxProvider>
      {children}
    </MapboxProvider>
    </FiltersProvider>
  )
}

MainProvider.displayName="MainProvider";