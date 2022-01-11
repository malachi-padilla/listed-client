import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { FormBtn, FormHeader, FormInput, FormLink, FormSubHeader, RegisterPageContainer } from './Register-css';
import { MainFormContainer } from '../../theme/layout/containers';
import { Link } from 'react-router-dom';

export default function Register() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	let navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
		const authentication = getAuth();
		createUserWithEmailAndPassword(authentication, registerEmail, registerPassword)
			.then((response) => {
				// this token is just a cheap way to see if someone is logged in. without a big request
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
				navigate('/');
			})
			.catch((error) => {
				console.log(error.code);
				if (error.code === 'auth/weak-password') {
					toast.error('Password too weak, atleast 6 chars');
				} else if (error.code === 'auth/email-already-in-use') {
					toast.error('Email Already In Use');
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
				}
			});
	};

	return (
		<RegisterPageContainer>
			<MainFormContainer onSubmit={register}>
				<FormHeader>Join Listed</FormHeader>
				<FormSubHeader>Sell anything. </FormSubHeader>
				<FormInput
					type='email'
					required='true'
					placeholder='Email'
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<FormInput
					type='password'
					required='true'
					placeholder='Password'
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<FormBtn type='submit'>Create your free account</FormBtn>
				<Link to='/login'>
					<FormLink>Already have an account?</FormLink>
				</Link>
			</MainFormContainer>
			<ToastContainer />
		</RegisterPageContainer>
	);
}
