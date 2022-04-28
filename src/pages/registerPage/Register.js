import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { FormBtn, FormHeader, FormInput, FormLink, FormSubHeader, RegisterPageContainer } from './Register-css';
import { MainFormContainer } from '../../theme/layout/containers';
import { Link } from 'react-router-dom';
import { registerUserRequest } from '../../api/userData';
import { useDispatch } from 'react-redux';
import { setMongoUser } from '../../redux/actions';

export default function Register() {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [registerError, setRegisterError] = useState(false);
	const [registerUsername, setRegisterUsername] = useState('');
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const register = (e) => {
		e.preventDefault();
		const authentication = getAuth();
		createUserWithEmailAndPassword(authentication, registerEmail, registerPassword)
			.then(async (response) => {
				let userId = await response.user.uid;
				registerUserRequest(registerUsername, userId).then((res) => {
					dispatch(setMongoUser(res));
					console.log(res);
				});
				sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
				navigate('/');
			})
			.catch((error) => {
				if (error.code === 'auth/weak-password') {
					toast.error('Password too weak, atleast 6 chars');
					setRegisterError(true);
				} else if (error.code === 'auth/email-already-in-use') {
					toast.error('Email Already In Use');
					setRegisterError(true);
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
					setRegisterError(true);
				}
			});
	};

	return (
		<RegisterPageContainer>
			<MainFormContainer onSubmit={register}>
				<FormHeader>Join Listed</FormHeader>
				<FormSubHeader>Sell anything. </FormSubHeader>
				<FormInput
					type='text'
					required={true}
					placeholder='Name'
					error={registerError}
					onChange={(e) => setRegisterUsername(e.target.value)}
				/>
				<FormInput
					type='email'
					required={true}
					placeholder='Email'
					error={registerError}
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<FormInput
					type='password'
					required={true}
					placeholder='Password'
					error={registerError}
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<FormBtn type='submit'>Create your free account</FormBtn>
				<Link to='/login'>
					<FormLink>Already have an account?</FormLink>
				</Link>
			</MainFormContainer>
		</RegisterPageContainer>
	);
}
