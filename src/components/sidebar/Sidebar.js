import React from 'react';
import { useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../GlobalContext';
import { OptionBar, OptionBarIcon, OptionBarSelected } from '../../theme/layout/customComponents';
import { onScroll, handleModalOpenOnFocus } from '../../util/functions';
import RegisterModal from '../modals/RegisterModal';
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
	SideBarBtn,
	SideBarContainer,
	SidebarOptions,
	SidebarOptionsContainer,
	SideBarSearchBarContainer,
} from './Sidebar-css';

const Sidebar = ({ filteredCategories }) => {
	const { user } = useContext(MyContext);
	const [scroll, setScroll] = useState(0);
	const [browseAll, setBrowseAll] = useState(null);
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [registerModalOpen, setRegisterModalOpen] = useState(false);
	const [listingModal, setListingModal] = useState(false);
	useEffect(() => {
		if (filteredCategories === null) {
			setBrowseAll(true);
		}
	}, []);

	const handleBtnClick = () => {
		if (!user) {
			setRegisterModalOpen(true);
		} else {
			setListingModal(true);
		}
	};

	return (
		<SideBarContainer>
			{registerModalOpen && <RegisterModal />}
			<SideBarSearchBarContainer>
				<SearchBarContainerHeader>
					<SearchBarHeaderText>Shop</SearchBarHeaderText>
					<SearchBarHeaderBtn>
						<i className='fa-solid fa-gear'></i>
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
					{browseAll ? (
						<OptionBarSelected>
							<OptionBarIcon>
								<i className='fas fa-store'></i>
							</OptionBarIcon>
							Browse all
						</OptionBarSelected>
					) : (
						<OptionBar>
							<OptionBarIcon>
								<i className='fas fa-store'></i>
							</OptionBarIcon>
							Browse all
						</OptionBar>
					)}
					<Options handleBtnClick={handleBtnClick} />
					<SideBarBtn onClick={() => handleBtnClick()}>
						<i className='fas fa-plus'></i>
						Create new listing
					</SideBarBtn>
				</SidebarOptions>
			</SidebarOptionsContainer>
		</SideBarContainer>
	);
};

export default Sidebar;
