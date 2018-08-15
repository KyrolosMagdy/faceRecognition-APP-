import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
	if (isSignedIn === true){
		return (
		<nav style = {{display:'flex',justifyContent:'flex-end', paddingRight: '55px', paddingTop:'20px'}}>
			<p  className= 'f3 b link dim pa3 pointer font br2 shadow-2 '  onClick={ () => onRouteChange('Signin')}> Sign out </p>
		</nav>
	)
	}else if (isSignedIn === false){
		return(	
			<nav style = {{display:'flex',justifyContent:'flex-end', paddingRight: '55px', paddingTop:'20px'}}>
				<p  className= 'f3 b link dim pa3 pointer font br2 shadow-2 '  onClick={ () => onRouteChange('Register')}> Register </p>
			</nav>
		)

	}
}
export default Navigation ; 