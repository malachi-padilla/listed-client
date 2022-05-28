import React from 'react';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MyContext } from '../../GlobalContext';
import { MobileOptionsTab } from '../../theme/layout/customComponents';
import { onScroll } from '../../util/functions';
import CategoryModal from '../modals/categoryModal/CategoryModal';
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
	MobileOptionsBar,
} from './Sidebar-css';

const Sidebar = ({ isDesktop }) => {
	const { user } = useContext(MyContext);
	const [scroll, setScroll] = useState(0);
	const [searchModalOpen, setSearchModalOpen] = useState(false);
	const [registerModalOpen, setRegisterModalOpen] = useState(false);
	const [mapModalOpen, setMapModalOpen] = useState(false);
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const navigate = useNavigate();

	const handleBtnClick = () => {
		if (!user) {
			setRegisterModalOpen(true);
		} else {
			navigate('/create');
		}
	};

	if (isDesktop) {
		return (
			<SideBarContainer>
				{mapModalOpen && <MapModal setMapModalOpen={setMapModalOpen} />}
				{registerModalOpen && <RegisterModal setRegisterModalOpen={setRegisterModalOpen} />}
				<SideBarSearchBarContainer>
					<SearchBarContainerHeader>
						<SearchBarHeaderText>Listed Marketplace</SearchBarHeaderText>
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
				<SidebarOptionsContainer id='sideBarOptions' onScroll={() => onScroll(setScroll, 'sideBarOptions')}>
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
	} else {
		return (
			<SideBarContainer>
				{categoryModalOpen && <CategoryModal open={setCategoryModalOpen} />}
				<SideBarSearchBarContainer>
					<MobileOptionsBar>
						<MobileOptionsTab as={NavLink} to={user ? '/' : '/login'}>
							<i className='fas fa-user'></i>
						</MobileOptionsTab>
						<MobileOptionsTab as={NavLink} to={user ? '/create' : '/login'}>
							Create <i className='fas fa-plus'></i>
						</MobileOptionsTab>
						<MobileOptionsTab onClick={() => setCategoryModalOpen(true)}>All Categories</MobileOptionsTab>
					</MobileOptionsBar>
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
			</SideBarContainer>
		);
	}
};

export default Sidebar;
