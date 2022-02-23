import React from 'react';
import { useNavigate } from 'react-router';
import { LoginPageContainer } from './Login-css';
import { MainFormContainer } from '../../theme/layout/containers';
import { FormBtn, FormHeader, FormInput, FormLink, FormSubHeader } from '../registerPage/Register-css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginEmailAction, setErrorAction, setLoginPasswordAction } from '../../redux/actions';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export default function Login() {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const { error, loginEmail, loginPassword } = useSelector((state) => state);
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
				console.error(error.message);
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
		<LoginPageContainer>
			<MainFormContainer onSubmit={login}>
				<FormHeader>Hello!</FormHeader>
				<FormSubHeader>Sign into your account here.</FormSubHeader>
				<FormInput
					type='email'
					required='true'
					placeholder='Email'
					error={error}
					onChange={(e) => dispatch(setLoginEmailAction(e.target.value))}
				/>
				<FormInput
					type='password'
					required='true'
					placeholder='Password'
					error={error}
					onChange={(e) => dispatch(setLoginPasswordAction(e.target.value))}
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
