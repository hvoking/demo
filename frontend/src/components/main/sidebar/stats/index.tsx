// App imports
import { Left } from './left';
import { Right } from './right';
import { Footer } from './footer';
import './styles.scss';

export const Stats = () => {
	return (
		<div className="stats-wrapper">
			<div className="stats">
				<div className="stats-title">Imóveis</div>
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
					<Left/>
					<Right/>
				</div>
				<Footer/>
			</div>
		</div>
	)
}

Stats.displayName="Stats";