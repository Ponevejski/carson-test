import React from 'react';

import { Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import './style.css';
import COLORS from '../../colors';

const Modal = ({ handleToggleModalVisible }) => (
	<div className='form-container'>
		<div className='form-header'>
			<Typography variant='h5' color={COLORS.lightBlue}>
				DELIVERY SIGN-OUT
			</Typography>
			<CloseIcon className='form-icon' onClick={handleToggleModalVisible} />
		</div>
		<hr className='form-line' />
		<Typography variant='h6' color={COLORS.black} align='center'>
			No deliveries to sign-out
		</Typography>
	</div>
);

export default Modal;
