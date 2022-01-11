import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BtnPrimary, BtnSecondary, Logo, NavContainer, NavContent, NavForm, NavInput, NavBtns } from './NavBar-css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getAuth, signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { useState } from 'react';

const NavBar = ({ isDesktop }) => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const auth = getAuth();

	let navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();
		const authentication = getAuth();
		signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
			.then((response) => {
				// purely to save time when trying to see if a user is logged in or not, instead of calling API.
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
				navigate('/');
			})
			.catch((error) => {
				console.error(error.code);
				if (error.code === 'auth/wrong-password') {
					console.log('toast');
					toast.error('Please check the Password');
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
				}
			});
	};
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				sessionStorage.removeItem('Auth Token');
				window.location.reload();

				// successful
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<NavContainer>
			<NavContent>
				<Logo onClick={() => navigate('/')}>Listed</Logo>
				<ToastContainer />
				{isDesktop ? (
					<NavForm onSubmit={login}>
						{sessionStorage.getItem('Auth Token') ? (
							<BtnPrimary onClick={handleLogout}>Logout</BtnPrimary>
						) : (
							<>
								<NavInput
									required={true}
									type='email'
									placeholder='Email'
									onChange={(e) => setLoginEmail(e.target.value)}
								/>
								<NavInput
									required={true}
									type='password'
									placeholder='Password'
									onChange={(e) => setLoginPassword(e.target.value)}
								/>
								<BtnPrimary type='submit'>Log in</BtnPrimary>
								<Link to='register'>
									<BtnSecondary>Sign up</BtnSecondary>
								</Link>
							</>
						)}
					</NavForm>
				) : (
					<NavBtns>
						<Link to='login'>
							<BtnPrimary>Log in</BtnPrimary>
						</Link>
						<Link to='register'>
							<BtnSecondary>Sign up</BtnSecondary>
						</Link>
					</NavBtns>
				)}
			</NavContent>
		</NavContainer>
	);
};

export default NavBar;
