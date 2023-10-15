// App imports
import './styles.scss';

export const Right = () => {
	return (
		<div className="right">
			<div style={{color: "rgba(102, 187, 106, 1)"}}>
				<div className="sidebar-item-title">9</div>
				<div style={{fontSize: "0.8em"}}>DISPONÍVEIS</div>
			</div>
			<div style={{color: "rgba(255, 193, 7, 1)"}}>
				<div className="sidebar-item-title">16</div>
				<div style={{fontSize: "0.8em"}}>LOCADOS</div>
			</div>
			<div style={{color: "rgba(30, 50, 96, 1)"}}>
				<div className="sidebar-item-title">36.00%</div>
				<div style={{fontSize: "0.8em"}}>VACÂNCIA</div>
			</div>
		</div>
	)
}

Right.displayName="Right";