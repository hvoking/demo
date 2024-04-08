// App imports
import { MapContainer } from './maps';
import { Left } from './left';
import { Right } from './right';
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
				<Left/>
				<MapContainer/>
				<Right/>
			</div>
		</MainProvider>
	)
}

Main.displayName="Main";