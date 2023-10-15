// App  imports
import './styles.scss';

export const Left = () => {
	return (
		<div className="left">
			<div className="sidebar-item-text">25</div>		
			<div style={{textAlign: "end", paddingRight: "10px"}}>ativos</div>
		</div>
	)
}

Left.displayName="Left";