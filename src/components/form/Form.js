import React, { useState } from 'react';

import {
	Typography,
	Button,
	Box,
	TextField,
	FormControl,
	Select,
	MenuItem,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import './style.css';
import COLORS from '../../colors';
import { UNITS } from '../../data';

const Form = ({ handleToggleModalVisible }) => {
	const [unit, setUnit] = useState('');
	const [detail, setDetail] = useState('');

	const handleUnitChange = (event) => setUnit(event.target.value);

	const handleDetailChange = (event) => setDetail(event.target.value);

	const handleSend = () => {
		console.log({ unit, detail });
		handleToggleModalVisible();
	};
	return (
		<div className='form-container'>
			<div className='form-header'>
				<Typography variant='h5' color={COLORS.lightBlue}>
					ADD DELIVERY
				</Typography>
				<CloseIcon className='form-icon' onClick={handleToggleModalVisible} />
			</div>
			<hr className='form-line' />

			<Box sx={{ minWidth: 100 }} align='left'>
				<h6 className='form-label'>Unit(s)</h6>
				<FormControl fullWidth>
					<Select
						value={unit}
						onChange={handleUnitChange}
						displayEmpty
						renderValue={(value) => (value !== '' ? value : 'Choose unit')}>
						{UNITS.map((unit) => (
							<MenuItem value={unit.id} key={unit.id}>
								{unit.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					margin='normal'
					fullWidth
					onChange={handleDetailChange}
					placeholder='Details'
				/>
				<Button
					variant='contained'
					color='success'
					fullWidth
					onClick={handleSend}>
					Add Delivery and Notify Residents
				</Button>
			</Box>
		</div>
	);
};

export default Form;
