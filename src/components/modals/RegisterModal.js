import React from 'react';
import { useNavigate } from 'react-router';
import { FormBtn, FormHeader, FormInput, FormLink, FormSubHeader } from '../../pages/registerPage/Register-css';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAction, setLoginEmailAction, setLoginPasswordAction } from '../../redux/actions';
import {
	HeroContents,
	HeroHeader,
	HeroList,
	HeroParagraph,
	RegisterModalContainer,
	RegisterModalForm,
	RegisterModalHero,
} from './RegisterModal-css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { toast } from 'react-toastify';
import { ModalOverlay } from '../../theme/layout/containers';

const RegisterModal = ({ setRegisterModalOpen }) => {
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
				setRegisterModalOpen(false);
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
		<ModalOverlay onClick={() => setRegisterModalOpen(false)}>
			<RegisterModalContainer onClick={(e) => e.stopPropagation()}>
				<RegisterModalHero>
					<HeroContents>
						<HeroHeader>Unlock Listed.</HeroHeader>
						<HeroParagraph>
							Buy and sell in your community on Listed. Log in to unlock the full benefits of Listed, including:
						</HeroParagraph>
						<HeroList>
							<li>
								<i className='fas fa-users'></i>view seller profiles
							</li>
							<li>
								<i className='fas fa-edit'></i>list items for sale
							</li>
							<li>
								<i className='fas fa-bookmark'></i>save and share listings
							</li>
						</HeroList>
					</HeroContents>
				</RegisterModalHero>
				<RegisterModalForm onSubmit={login}>
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
					<Link onClick={() => setRegisterModalOpen(false)} to='/register'>
						<FormLink>Don't have an account yet?</FormLink>
					</Link>
					<FormLink>Forgot password?</FormLink>
				</RegisterModalForm>
			</RegisterModalContainer>
		</ModalOverlay>
	);
};

export default RegisterModal;
