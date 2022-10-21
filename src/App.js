import React, { useState } from 'react';
import { Container } from '@mui/material';

import DeliveryHeader from './components/deliveryHeader/DeliveryHeader';
import SearchField from './components/searchField/SearchField';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import Modal from './components/modal/Modal';
import { UNITS } from './data';

import './App.css';

const App = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [filteredCards, setFilteredCards] = useState(UNITS);

	const handleToggleFormVisible = () => setIsFormVisible(!isFormVisible);
	const handleToggleModalVisible = () => setIsModalVisible(!isModalVisible);

	return (
		<Container className='App' align='center'>
			<DeliveryHeader handleToggleModalVisible={handleToggleFormVisible} />
			<SearchField setFilteredCards={setFilteredCards} />
			{isFormVisible && (
				<Form handleToggleModalVisible={handleToggleFormVisible} />
			)}
			{isModalVisible && (
				<Modal handleToggleModalVisible={handleToggleModalVisible} />
			)}
			<Cards
				filteredCards={filteredCards}
				handleToggleModalVisible={handleToggleModalVisible}
			/>
		</Container>
	);
};

export default App;
