import React from 'react';

import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import COLORS from '../../colors';
import './style.css';

const theme = createTheme();

theme.typography.h2 = {
	fontSize: '3rem',
	'@media (max-width:600px)': {
		fontSize: '1rem',
	},
	'@media (max-width:768px)': {
		fontSize: '2rem',
	},
	[theme.breakpoints.up('md')]: {
		fontSize: '3rem',
	},
};

const DeliveryHeader = ({ handleToggleModalVisible }) => {
	return (
		<div className='header-container'>
			<ThemeProvider theme={theme}>
				<Typography
					variant='h2'
					fontWeight='fontWeightLight'
					color={COLORS.lightBlue}>
					DELIVERY SELF SIGN-OUT
				</Typography>
			</ThemeProvider>
			<Box ml={10}>
				<Button
					variant='contained'
					color='success'
					onClick={handleToggleModalVisible}>
					+ Add Delivery
				</Button>
			</Box>
		</div>
	);
};

export default DeliveryHeader;
