// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

const siFormat = d3.format(",");

export const Description = ({ item, setCurrentId }: any) => {
	const onMouseOver = (e: any, item: any) => {
		setCurrentId(item.codigo);
	}

	return (
		<div 
			className="pictures-description-wrapper"
			onMouseOver={(e: any) => onMouseOver(e, item)}
			onMouseOut={() => setCurrentId(null)}
		>
			<div className="pictures-description">
				<div className="cod-wrapper">
					Código: {item.codigo}
				</div>
				<div className="description-title">
					{item.nome}
				</div>
				{/*<div className="address-wrapper">
					<img 
				      style={{width: "7px", paddingLeft: "2px", paddingRight: "5px"}} 
				      src="static/components/map/marker.svg" 
				      alt="marker"
				    />
				    {item.endereco.toLowerCase()}
				</div>*/}
			</div>
			<div className="values-wrapper">
				{item.valorAluguel.length > 0 && <div style={{textAlign: "center", paddingBottom: "5px"}}>
					<div>Valor do Aluguel</div>
					<div className="current-value">R$ {siFormat(item.valorAluguel)}</div>
				</div>}
				{item.valorDiaria.length > 0 && <div style={{textAlign: "center", paddingBottom: "5px"}}>
					<div>Valor Temporada</div>
					<div className="current-value">R$ {siFormat(item.valorDiaria)}</div>
				</div>}
				{item.valorVenda.length > 0 && <div style={{textAlign: "center"}}>
					<div>Valor de Venda</div>
					<div className="current-value">R$ {siFormat(item.valorVenda)}</div>
				</div>}
			</div>
		</div>
	)
}

Description.displayName="Description";