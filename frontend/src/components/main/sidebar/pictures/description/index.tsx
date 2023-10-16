// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item }: any) => {
	return (
		<div className="pictures-description-wrapper">
			<div>
				<div className="cod-wrapper">
					Código: {item.codigo}
				</div>
				<div style={{maxWidth: "100%", whiteSpace: "pre-wrap"}}>{item.nome}</div>
			</div>
			<div>R$ {siFormat(item.valorAluguel)}</div>
		</div>
	)
}

Description.displayName="Description";