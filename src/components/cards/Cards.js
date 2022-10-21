import React from 'react';

import Card from './Card';

import './style.css';

const Cards = ({ filteredCards, handleToggleModalVisible }) => {
	return (
		<div className='cards-container'>
			{filteredCards.map((item) => (
				<Card
					card={item.name}
					key={item.id}
					handleToggleModalVisible={handleToggleModalVisible}
				/>
			))}
		</div>
	);
};

export default Cards;
