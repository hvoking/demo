// App imports
import { Description } from './description';
import { propertyDict } from '../../utils/property';
import './styles.scss';

export const Pictures = () => {
	return (
		<div className="pictures-wrapper">
			<div className="pictures">
				{propertyDict.map((item: any, index: any) => {
					return (
						<div key={index} className="pictures-box">
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
									height="70"
									style={{padding: "5px", borderRadius: "10px"}}
								/>
								<Description item={item}/>
							</div>
						</div>
					)}
				)}
			</div>
		</div>
	)
}

Pictures.displayName="Pictures";