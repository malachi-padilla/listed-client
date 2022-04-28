import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BtnPrimary, BtnSecondary, Logo, NavContainer, NavContent, NavForm, NavInput, NavBtns } from './NavBar-css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginEmailAction, setErrorAction, setLoginPasswordAction } from '../../redux/actions';
import { CircleBtn } from '../../theme/btns';
import LogoutModal from '../modals/logoutModal/LogoutModal';

const NavBar = ({ isDesktop, setIsDarkTheme, isDarkTheme }) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const { error, loginEmail, loginPassword } = useSelector((state) => state);
	const [modalOpen, setModalOpen] = useState(false);
	const login = (e) => {
		e.preventDefault();
		const authentication = getAuth();
		signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
			.then(async (response) => {
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
				navigate('/');
			})
			.catch((error) => {
				console.error(error.code);
				if (error.code === 'auth/wrong-password') {
					toast.error('Please check the Password');
					dispatch(setErrorAction(true));
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
					dispatch(setErrorAction(true));
				}
			});
	};

	return (
		<NavContainer>
			<Logo onClick={() => navigate('/')}>Listed</Logo>
			<NavContent>
				<ToastContainer />
				{isDesktop ? (
					<>
						<NavForm onSubmit={login}>
							{sessionStorage.getItem('Auth Token') ? (
								<>
									<CircleBtn isActive={modalOpen} type='button' onClick={() => setModalOpen(!modalOpen)}>
										<i className='fas fa-caret-down'></i>
									</CircleBtn>
								</>
							) : (
								<>
									<NavInput
										error={error}
										required={true}
										type='email'
										placeholder='Email'
										onChange={(e) => dispatch(setLoginEmailAction(e.target.value))}
									/>
									<NavInput
										error={error}
										required={true}
										type='password'
										placeholder='Password'
										onChange={(e) => dispatch(setLoginPasswordAction(e.target.value))}
									/>
									<BtnPrimary type='submit'>Log in</BtnPrimary>
									<Link to='register'>
										<BtnSecondary>Sign up</BtnSecondary>
									</Link>
								</>
							)}
						</NavForm>
					</>
				) : sessionStorage.getItem('Auth Token') && !isDesktop ? (
					<>
						<CircleBtn isActive={modalOpen} type='button' onClick={() => setModalOpen(!modalOpen)}>
							<i className='fas fa-caret-down'></i>
						</CircleBtn>
					</>
				) : (
					<NavBtns>
						<Link to='login'>
							<BtnPrimary>Log in</BtnPrimary>
						</Link>
					</NavBtns>
				)}
			</NavContent>
			{modalOpen && (
				<LogoutModal setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} setModalOpen={setModalOpen} />
			)}
		</NavContainer>
	);
};

export default NavBar;
