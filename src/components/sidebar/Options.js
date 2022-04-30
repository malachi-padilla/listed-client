import React, { useContext } from 'react';
import { MyContext } from '../../GlobalContext';
import { OptionBar, OptionBarIcon } from '../../theme/layout/customComponents';
import { NavLink, useLocation } from 'react-router-dom';

const Options = ({ setRegisterModalOpen }) => {
	const { user } = useContext(MyContext);
	const location = useLocation();
	const SideBarOptions = [
		{ name: 'Browse All', path: '/', icon: 'fas fa-store' },
		{ name: 'Buying', path: '/buying', icon: 'fas fa-shopping-bag' },
		{ name: 'Selling', path: '/selling', icon: 'fas fa-tag' },
	];
	return user ? (
		SideBarOptions.map((item, index) => (
			<OptionBar as={NavLink} key={index} to={item.path} className={location.pathname === item.path && 'current'}>
				<OptionBarIcon>
					<i className={item.icon}></i>
				</OptionBarIcon>
				{item.name}
			</OptionBar>
		))
	) : (
		<>
			<OptionBar as={NavLink} to='/' className={location.pathname === '/' && 'current'}>
				<OptionBarIcon>
					<i className='fas fa-store'></i>
				</OptionBarIcon>
				Browse all
			</OptionBar>
			<OptionBar as='button' onClick={() => setRegisterModalOpen(true)}>
				<OptionBarIcon>
					<i className='fas fa-user'></i>
				</OptionBarIcon>
				Your account
			</OptionBar>
		</>
	);
};

export default Options;
