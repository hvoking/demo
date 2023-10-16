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
			<div 
				style={{
					display: "grid", 
					gridTemplateRows: "min-content min-content auto", 
					gridGap: "5px"
				}}>
				<div className="cod-wrapper">
					Código: {item.codigo}
				</div>
				<div 
					style={{
						maxWidth: "100%", 
						whiteSpace: "pre-wrap", 
						fontSize: "1.4em", 
						fontWeight: "700", 
						color: "rgba(0, 0, 0, .6)"
					}}
				>{item.nome}
				</div>
				<div style={{
					whiteSpace: "pre-wrap",
					overflow: "hidden",
					alignSelf: "end",
					paddingBottom: "5px",
					fontSize: "1.2em"
				}}><div><img 
			      style={{width: "7px", paddingLeft: "2px", paddingRight: "5px"}} 
			      src="static/components/map/marker.svg" 
			      alt="marker"
		     />{item.endereco.toLowerCase()}</div></div>
			</div>
			<div style={{alignSelf: "center"}}>
				{item.valorAluguel.length > 0 && <div style={{textAlign: "center", paddingBottom: "5px"}}>
					<div>Valor do Aluguel</div>
					<div style={{color: "rgba(46, 125, 50, 1)", fontWeight: "700"}}>R$ {siFormat(item.valorAluguel)}</div>
				</div>}
				{item.valorDiaria.length > 0 && <div style={{textAlign: "center", paddingBottom: "5px"}}>
					<div>Valor Temporada</div>
					<div style={{color: "rgba(46, 125, 50, 1)", fontWeight: "700"}}>R$ {siFormat(item.valorDiaria)}</div>
				</div>}
				{item.valorVenda.length > 0 && <div style={{textAlign: "center"}}>
					<div>Valor de Venda</div>
					<div style={{color: "rgba(46, 125, 50, 1)", fontWeight: "700"}}>R$ {siFormat(item.valorVenda)}</div>
				</div>}
			</div>
		</div>
	)
}

Description.displayName="Description";