import React from 'react' ;
import './FaceRecognation.css' ;
const FaceRecognation =({imageUrl, box}) => {
	return (
		<div className='center ma' >
			<div className='center ma absolute mt2'>
				<img id= "inputImage" alt='' src = {imageUrl} width='500px'  height='500px' />
				<div className="bounding-box" style={{left:box.leftCol,top:box.topRow, right:box.rightCol,  bottom:box.bottomRow}}> </div>
			</div>
			
		</div> 



	)
}
export default FaceRecognation;