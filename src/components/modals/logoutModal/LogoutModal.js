import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {
	LogoutModalContainer,
	ProfileBar,
	ProfileImg,
	ProfileName,
	SettingBar,
	SettingsContainer,
	SettingBarIcon,
	SettingBarBtn,
	SettingModalHeading,
	SettingModalHeader,
	BackBtn,
	SettingBox,
	SettingBoxHeader,
	SettingIcon,
	SettingTextBox,
	SettingTitle,
	SettingDescription,
	LogoutModalOverlay,
} from './LogoutModal-css';
import { getAuth, signOut } from '@firebase/auth';
import { RadioBtn, RadioLabel } from '../../../theme/layout/customComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setMongoUser } from '../../../redux/actions';

const LogoutModal = ({ isDarkTheme, setIsDarkTheme, setModalOpen }) => {
	const [settingModalOpen, setSettingModalOpen] = useState(false);
	const { mongoUser } = useSelector((state) => state);
	const dispatch = useDispatch();
	const auth = getAuth();
	let navigate = useNavigate();
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				sessionStorage.removeItem('Auth Token');
				dispatch(setMongoUser(null));
				navigate('/');
				window.location.reload();
				// successful
			})
			.catch((err) => {
				// An error happened.
				console.log(err);
			});
	};

	return (
		<LogoutModalOverlay onClick={() => setModalOpen(false)}>
			<LogoutModalContainer onClick={(e) => e.stopPropagation()}>
				{settingModalOpen ? (
					<>
						<SettingModalHeader>
							<BackBtn onClick={() => setSettingModalOpen(false)} className='fas fa-arrow-left'></BackBtn>
							<SettingModalHeading>Display & Accessibility</SettingModalHeading>
						</SettingModalHeader>
						<SettingBox>
							<SettingBoxHeader>
								<SettingIcon>
									<i className='fas fa-moon'></i>
								</SettingIcon>
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
					</>
				) : (
					<>
						<ProfileBar>
							<ProfileImg>
								<i className='fas fa-user'></i>
							</ProfileImg>
							<ProfileName>
								{!mongoUser ? null : mongoUser && mongoUser.username}
								<br />
								<span>See your profile</span>
							</ProfileName>
						</ProfileBar>
						<SettingsContainer>
							<SettingBar onClick={() => setSettingModalOpen(true)}>
								<SettingBarIcon>
									<i className='fas fa-moon'></i>
								</SettingBarIcon>
								Display & Accessibility
								<SettingBarBtn className='fas fa-chevron-right' />
							</SettingBar>
							<SettingBar onClick={handleLogout}>
								<SettingBarIcon>
									<i className='fas fa-sign-out-alt'></i>
								</SettingBarIcon>
								Log Out
							</SettingBar>
						</SettingsContainer>
					</>
				)}
			</LogoutModalContainer>
		</LogoutModalOverlay>
	);
};

export default LogoutModal;
