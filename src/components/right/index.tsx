// App imports
import { Stats } from './stats';
import { Pictures } from './pictures'
import './styles.scss';

export const Right = () => {
	return (
		<div className="right">
			<Stats/>
			<div className="property-list-wrapper">
				<div className="property-list-title">Listagem de imóveis</div>
			</div>
			<Pictures/>
		</div>
	)
}

Right.displayName="Right";