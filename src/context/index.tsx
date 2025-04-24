// App imports
import { SizesProvider } from './sizes';
import { TooltipProvider } from './tooltip';
import { IconLayerProvider } from './icon';
import { GeoProvider } from './geo';
import { PropertyProvider } from './property';

export const MainProvider = ({children}: any) => {
  return (
    <PropertyProvider>
    <GeoProvider>
    <SizesProvider>
    <TooltipProvider>
    <IconLayerProvider>
      {children}
    </IconLayerProvider>
    </TooltipProvider>
    </SizesProvider>
    </GeoProvider>
    </PropertyProvider>
  )
}

MainProvider.displayName="MainProvider";