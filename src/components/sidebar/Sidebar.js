import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../GlobalContext';
import { onScroll } from '../../util/functions';
import MapModal from '../modals/mapModal/MapModal';
import RegisterModal from '../modals/registerModal/RegisterModal';
import Categories from './categories/Categories';
import Filters from './filters/Filters';
import Options from './Options';
import SearchModal from './searchModal/SearchModal';

import {
	SearchBar,
	SearchBarContainerHeader,
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

const Sidebar = () => {
	const { user } = useContext(MyContext);
	const [scroll, setScroll] = useState(0);
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [registerModalOpen, setRegisterModalOpen] = useState(false);
	const [mapModalOpen, setMapModalOpen] = useState(false);
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
			{mapModalOpen && <MapModal setMapModalOpen={setMapModalOpen} />}
			{registerModalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />}
			<SideBarSearchBarContainer>
				<SearchBarContainerHeader>
					<SearchBarHeaderText>Shop</SearchBarHeaderText>
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
				<Filters setMapModalOpen={setMapModalOpen} />
				<Categories />
			</SidebarOptionsContainer>
		</SideBarContainer>
	);
};

export default Sidebar;
