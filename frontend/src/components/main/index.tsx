// App imports
import { MapContainer } from './map';
import { Sidebar } from './sidebar';
import './styles.scss';

// Context imports
import { MainProvider } from './context';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	return (
		<MainProvider>
			<div className="main-wrapper">
				<div className="right-sidebar"></div>
				<MapContainer/>
				<Sidebar/>
			</div>
		</MainProvider>
	)
}

Main.displayName="Main";