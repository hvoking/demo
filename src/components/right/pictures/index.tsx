// App imports
import { Description } from './description';
import './styles.scss';

// Context imports
import { useProperty } from '../../context/filters/property';

export const Pictures = () => {
	const { currentId, setCurrentId, propertyDict } = useProperty();

	return (
		<div className="pictures-wrapper">
			<div className="pictures">
				{propertyDict.map((item: any, index: any) => {
					return (
						<div 
							key={index} 
							className="pictures-box"
							style={{
								border: currentId === item.codigo ? 
								"2px solid rgba(255, 0, 0, 1)" : 
								"2px solid rgba(0, 0, 0, 0)"
							}}
						>
							<div className="pictures-item">
								<div 
									style={{
										width: "12px",
										backgroundColor: 
											item.disponivel === "1" ?
											"rgba(102, 187, 106, 1)" :
											"rgba(255, 193, 7, 1)", 
										borderRadius: "10px 0 0 10px"

								}}></div>
								<img 
									className="pictures-img"
									src={item.imgUrl}
									alt="property"
									width="120"
									height="80"
									style={{padding: "5px", borderRadius: "10px"}}
								/>
								<Description item={item} setCurrentId={setCurrentId}/>
							</div>
						</div>
					)}
				)}
			</div>
		</div>
	)
}

Pictures.displayName="Pictures";