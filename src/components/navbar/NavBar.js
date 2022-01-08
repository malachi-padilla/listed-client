import React from 'react';
import { BtnPrimary, BtnSecondary, Logo, NavContainer, NavContent, NavForm } from './NavBar-css';

const NavBar = () => {
	return (
		<NavContainer>
			<NavContent>
				<Logo>Listed</Logo>
				<NavForm>
					<BtnPrimary>log in</BtnPrimary>
					<BtnSecondary>Sign up</BtnSecondary>
				</NavForm>
			</NavContent>
		</NavContainer>
	);
};

export default NavBar;
