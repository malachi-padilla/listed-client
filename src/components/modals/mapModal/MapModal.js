import React from 'react';
import { ModalOverlay } from '../../../theme/layout/containers';
import {
	ApplyBtn,
	ExitBtn,
	MapModalBody,
	MapModalContainer,
	MapModalFooter,
	MapModalHeader,
	MapModalHeaderText,
} from './MapModal-css';

const MapModal = ({ setMapModalOpen }) => {
	return (
		<ModalOverlay onClick={() => setMapModalOpen(false)}>
			<MapModalContainer onClick={(e) => e.stopPropagation()}>
				<MapModalHeader>
					<MapModalHeaderText>Change location</MapModalHeaderText>
					<ExitBtn onClick={() => setMapModalOpen(false)}>
						<i className='fas fa-times'></i>
					</ExitBtn>
				</MapModalHeader>
				<MapModalBody></MapModalBody>
				<MapModalFooter>
					<ApplyBtn>Apply</ApplyBtn>
				</MapModalFooter>
			</MapModalContainer>
		</ModalOverlay>
	);
};

export default MapModal;
