import React from 'react';
import 'tachyons';
const Card = (props) => {
	const {id, name, email} = props;
	return (
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${id}?size=200x200`} alt='robo' />
		<h2>{name}</h2>
		<h4>{email}</h4>
	</div>
	);
}

export default Card;