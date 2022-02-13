import React, { useContext } from 'react';
import { MyContext } from '../../GlobalContext';
import { OptionBar, OptionBarIcon } from '../../theme/layout/customComponents';

const Options = ({ handleBtnClick }) => {
	const { user } = useContext(MyContext);
	return user ? null : (
		<OptionBar onClick={() => handleBtnClick()}>
			<OptionBarIcon>
				<i className='fas fa-user'></i>
			</OptionBarIcon>
			Your account
		</OptionBar>
	);
};

export default Options;
