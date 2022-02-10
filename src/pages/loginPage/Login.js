import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { LoginPageContainer } from './Login-css';
import { MainFormContainer } from '../../theme/layout/containers';
import { FormBtn, FormHeader, FormInput, FormLink, FormSubHeader } from '../registerPage/Register-css';
import { Link } from 'react-router-dom';

export default function Login() {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [loginError, setLoginError] = useState(false);
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
					toast.error('Please check the Password');
					setLoginError(true);
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
					setLoginError(true);
				}
			});
	};

	return (
		<LoginPageContainer>
			<MainFormContainer onSubmit={login}>
				<FormHeader>Hello!</FormHeader>
				<FormSubHeader>Sign into your account here.</FormSubHeader>
				<FormInput
					type='email'
					required='true'
					placeholder='Email'
					error={loginError}
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<FormInput
					type='password'
					required='true'
					placeholder='Password'
					error={loginError}
					onChange={(e) => setLoginPassword(e.target.value)}
				/>
				<FormBtn type='submit'>Log In</FormBtn>
				<Link to='/register'>
					<FormLink>Don't have an account yet?</FormLink>
				</Link>
				<FormLink>Forgot password?</FormLink>
			</MainFormContainer>
		</LoginPageContainer>
	);
}
