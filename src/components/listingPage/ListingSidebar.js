import React from 'react';
import { OptionBar, OptionBarIcon } from '../../theme/layout/customComponents';
import { HeaderContainer, ListingSidebarContainer } from './ListingSidebar-css';
import { Header } from './listItemSidebar/ListItemSidebar-css';

const ListingSidebar = () => {
	return (
		<ListingSidebarContainer>
			<HeaderContainer>
				<Header>Create New Listing</Header>
				<OptionBar className={'current'}>
					<OptionBarIcon>
						<i className='fa fa-tag'></i>
					</OptionBarIcon>
					Choose Listing Type
				</OptionBar>
			</HeaderContainer>
		</ListingSidebarContainer>
	);
};

export default ListingSidebar;
