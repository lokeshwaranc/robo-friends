import React from 'react';

import Card from '../components/card.component';

const CardList = ({robots}) => {
	return(
		robots.map(robot=> (
			<Card id={robot.id} name={robot.name} email={robot.email}/>
		  ))
	);
}

export default CardList;