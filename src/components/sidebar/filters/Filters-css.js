import styled from 'styled-components';
import { OptionBar } from '../../../theme/layout/customComponents';
import { SearchBarContainerHeader, SidebarOptions } from '../Sidebar-css';

export const SidebarFilterContainer = styled(SidebarOptions)``;

export const SidebarFilterHeader = styled(SearchBarContainerHeader)`
	font-size: 1.6rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.text};
	width: 100%;
`;

export const SidebarFilter = styled(OptionBar)`
	color: ${(props) => props.theme.colors.primary};
`;
