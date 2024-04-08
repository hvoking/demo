// App imports
import './styles.scss';

export const Left = () => {
	return (
		<div className="left">
			<img src={process.env.PUBLIC_URL + "/static/logos/black.svg"} width="40px" alt="logo"/>
		</div>
	)
}

Left.displayName="Left";