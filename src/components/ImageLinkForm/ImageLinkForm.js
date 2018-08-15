import React from 'react';
import './ImageLinkForm.css'; 
 
const ImageLinkForm = ({onInputChange, onSubmit}) =>{
	return(
		<div>
			<p className='white f3 center'>
				{'this magical brain will detect faces in your bictures'};
			</p>
			<div className='center'>
				<div className='pa4 br3 form center '>
					<input className=' f4 pa2 w-70 ' type='url' onChange={onInputChange}/>
					<button 
					className="w-30 grow f4 link ph3 pv2 dib white bg-dark-red bottom"
					onClick = {onSubmit}
					>
						{'Detect Now !'}
					</button>
				</div>
			</div>

		</div>

	)

} 	
export default ImageLinkForm ;