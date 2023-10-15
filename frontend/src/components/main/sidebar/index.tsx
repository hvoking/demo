// App imports
import { Left } from './left';
import { Right } from './right';
import { Footer } from './footer';
import './styles.scss';

export const Sidebar = () => {
	return (
		<div className="sidebar-wrapper">
			<div className="property-wrapper">
				<div className="property-title">Imóveis</div>
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
					<Left/>
					<Right/>
				</div>
				<Footer/>
			</div>
		</div>
	)
}

Sidebar.displayName="Sidebar";