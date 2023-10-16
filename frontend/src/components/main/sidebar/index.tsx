// App imports
import { Stats } from './stats';
import { Pictures } from './pictures'
import './styles.scss';

export const Sidebar = () => {
	return (
		<div className="sidebar-wrapper">
			<Stats/>
			<div className="property-list-wrapper">
				<div className="property-list-title">Listagem de imóveis</div>
			</div>
			<Pictures/>
		</div>
	)
}

Sidebar.displayName="Sidebar";