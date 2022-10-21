import React from 'react';

import './style.css';

const Card = ({ card, handleToggleModalVisible }) => (
	<div className='card-container' onClick={handleToggleModalVisible}>
		<h1>{card}</h1>
	</div>
);

export default Card;
