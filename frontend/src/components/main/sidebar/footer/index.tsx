// App imports
import './styles.scss';

export const Footer = () => {
	return (
		<div className="property-footer">
			<div className="property-footer-text">VER IMÓVEIS</div>
			<div style={{width: "15px", display: "grid", gridTemplateColumns: "10px 5px"}}>
				<div className="arrow-line"></div>
				<div className="arrow-right"></div>
			</div>
		</div>
	)
}

Footer.displayName="Footer";