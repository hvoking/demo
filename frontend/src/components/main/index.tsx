// App imports
import { MapContainer } from './maps';
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
				<div className="right-sidebar">
					<img src="static/utils/logoImobia.png" width="40px" alt="logo-imobia"/>
				</div>
				<MapContainer/>
				<Sidebar/>
			</div>
		</MainProvider>
	)
}

Main.displayName="Main";