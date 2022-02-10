import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../GlobalContext';
import {
	SearchBar,
	SearchBarContainerHeader,
	SearchBarHeaderBtn,
	SearchBarHeaderText,
	SearchBarIconContainer,
	SearchBarInput,
	SearchBarInputWrapper,
	SideBarContainer,
	SidebarOptionsContainer,
	SideBarSearchBarContainer,
} from './Sidebar-css';

const Sidebar = () => {
	const { user } = useContext(MyContext);

	return (
		<SideBarContainer>
			<SideBarSearchBarContainer>
				<SearchBarContainerHeader>
					<SearchBarHeaderText>Marketplace</SearchBarHeaderText>
					<SearchBarHeaderBtn>
						<i className='fa-solid fa-gear'></i>
					</SearchBarHeaderBtn>
				</SearchBarContainerHeader>
				<SearchBar>
					<SearchBarInputWrapper>
						<SearchBarIconContainer>
							<i className='fa-solid fa-magnifying-glass'></i>
						</SearchBarIconContainer>
						<SearchBarInput type='text' placeholder='Search Marketplace'></SearchBarInput>
					</SearchBarInputWrapper>
				</SearchBar>
			</SideBarSearchBarContainer>
			<SidebarOptionsContainer></SidebarOptionsContainer>
		</SideBarContainer>
	);
};

export default Sidebar;
