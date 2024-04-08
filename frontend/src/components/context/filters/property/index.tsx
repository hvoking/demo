// React imports
import { useState, useContext, createContext } from 'react';

const PropertyContext: React.Context<any> = createContext(null)

export const useProperty = () => {
	return (
		useContext(PropertyContext)
	)
}

export const PropertyProvider = ({children}: any) => {
	const [ currentId, setCurrentId ] = useState<any>(null);
	
	return (
		<PropertyContext.Provider value={{
			currentId, setCurrentId,
		}}>
			{children}
		</PropertyContext.Provider>
	)
}

PropertyContext.displayName = "PropertyContext";