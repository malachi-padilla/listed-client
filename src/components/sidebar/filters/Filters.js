import React, { useContext } from 'react';
import { MyContext } from '../../../GlobalContext';
import { SidebarFilter, SidebarFilterContainer, SidebarFilterHeader } from './Filters-css';

const Filters = ({ setMapModalOpen }) => {
	const { geoLocation } = useContext(MyContext);
	return (
		<SidebarFilterContainer>
			<SidebarFilterHeader>Filters</SidebarFilterHeader>
			<SidebarFilter onClick={() => setMapModalOpen(true)}>
				{!geoLocation ? null : geoLocation.city + ', ' + geoLocation.region_code}
			</SidebarFilter>
		</SidebarFilterContainer>
	);
};

export default Filters;
