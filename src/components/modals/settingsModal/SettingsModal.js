import React from 'react';
import { RadioBtn, RadioLabel } from '../../../theme/layout/customComponents';
import {
	SettingBox,
	SettingBoxHeader,
	SettingDescription,
	Settingicon,
	SettingsModalContainer,
	SettingsModalOverlay,
	SettingTextBox,
	SettingTitle,
} from './SettingsModal-css';

const SettingsModal = ({ setIsDarkTheme, isDarkTheme, setSettingsModalOpen }) => {
	return (
		<SettingsModalOverlay onClick={() => setSettingsModalOpen(false)}>
			<SettingsModalContainer onClick={(e) => e.stopPropagation()}>
				<SettingBox>
					<SettingBoxHeader>
						<Settingicon>
							<i className='fas fa-moon'></i>
						</Settingicon>
						<SettingTextBox>
							<SettingTitle>Dark Mode</SettingTitle>
							<SettingDescription>
								Adjust the appearance of Listed to reduce glare and give your eyes a break.
							</SettingDescription>
						</SettingTextBox>
					</SettingBoxHeader>
					<RadioLabel>
						Off
						<RadioBtn type='radio' name='radio' onClick={() => setIsDarkTheme(false)} checked={!isDarkTheme} />
					</RadioLabel>
					<RadioLabel>
						On
						<RadioBtn type='radio' name='radio' onClick={() => setIsDarkTheme(true)} checked={isDarkTheme} />
					</RadioLabel>
				</SettingBox>
			</SettingsModalContainer>
		</SettingsModalOverlay>
	);
};

export default SettingsModal;
