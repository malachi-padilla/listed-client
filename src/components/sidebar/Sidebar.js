import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../GlobalContext';
import { onScroll } from '../../util/functions';
import RegisterModal from '../modals/RegisterModal';
import SettingsModal from '../modals/settingsModal/SettingsModal';
import Options from './Options';
import SearchModal from './searchModal/SearchModal';
import {
	SearchBar,
	SearchBarContainerHeader,
	SearchBarHeaderBtn,
	SearchBarHeaderText,
	SearchBarIconContainer,
	SearchBarInput,
	SearchBarInputWrapper,
	SideBarListingBtn,
	SideBarContainer,
	SidebarOptions,
	SidebarOptionsContainer,
	SideBarSearchBarContainer,
} from './Sidebar-css';

const Sidebar = ({ filteredCategories, setIsDarkTheme, isDarkTheme }) => {
	const { user } = useContext(MyContext);
	const [scroll, setScroll] = useState(0);
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [registerModalOpen, setRegisterModalOpen] = useState(false);
	const [settingsModalOpen, setSettingsModalOpen] = useState(false);
	const navigate = useNavigate();

	const handleBtnClick = () => {
		if (!user) {
			setRegisterModalOpen(true);
		} else {
			navigate('/create');
		}
	};

	return (
		<SideBarContainer>
			{settingsModalOpen && (
				<SettingsModal
					setIsDarkTheme={setIsDarkTheme}
					isDarkTheme={isDarkTheme}
					setSettingsModalOpen={setSettingsModalOpen}
				/>
			)}
			{registerModalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />}
			<SideBarSearchBarContainer>
				<SearchBarContainerHeader>
					<SearchBarHeaderText>Shop</SearchBarHeaderText>
					<SearchBarHeaderBtn onClick={() => setSettingsModalOpen(true)}>
						<i className='fas fa-adjust'></i>
					</SearchBarHeaderBtn>
				</SearchBarContainerHeader>
				<SearchBar scroll={scroll}>
					<SearchBarInputWrapper>
						<SearchBarIconContainer>
							<i className='fa-solid fa-magnifying-glass'></i>
						</SearchBarIconContainer>
						<SearchBarInput
							type='text'
							placeholder='Search listed'
							onFocus={() => setSearchModalOpen(true)}
							onBlur={() => setSearchModalOpen(false)}></SearchBarInput>
					</SearchBarInputWrapper>
				</SearchBar>
				{searchModalOpen && <SearchModal />}
			</SideBarSearchBarContainer>
			<SidebarOptionsContainer id='sideBarOptions' onScroll={() => onScroll(setScroll)}>
				<SidebarOptions>
					<Options setRegisterModalOpen={setRegisterModalOpen} />
					<SideBarListingBtn onClick={() => handleBtnClick()}>
						<i className='fas fa-plus'></i>
						Create new listing
					</SideBarListingBtn>
				</SidebarOptions>
			</SidebarOptionsContainer>
		</SideBarContainer>
	);
};

export default Sidebar;
