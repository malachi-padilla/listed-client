import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { BtnPrimary, BtnSecondary, Logo, NavContainer, NavContent, NavForm, NavInput, NavBtns } from './NavBar-css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getAuth, signOut, signInWithEmailAndPassword } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginEmailAction, setErrorAction, setLoginPasswordAction } from '../../redux/actions';
import { CircleBtn } from '../../theme/btns';
import { MyContext } from '../../GlobalContext';

const NavBar = ({ isDesktop }) => {
	const { user } = useContext(MyContext);
	const auth = getAuth();
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
				console.error(error.code);
				if (error.code === 'auth/wrong-password') {
					toast.error('Please check the Password');
					dispatch(setErrorAction(true));
				} else if (error.code === 'auth/invalid-email') {
					toast.error('Please check the Email');
					dispatch(setErrorAction(true));
				}
			});
		console.log(error);
	};

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				sessionStorage.removeItem('Auth Token');
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
		<NavContainer>
			<Logo onClick={() => navigate('/')}>Listed</Logo>
			<NavContent>
				<ToastContainer />
				{isDesktop ? (
					<>
						<NavForm onSubmit={login}>
							{sessionStorage.getItem('Auth Token') ? (
								<>
									<BtnPrimary onClick={handleLogout}>Logout</BtnPrimary>
									<CircleBtn type='button'>
										<i className='fas fa-caret-down'></i>
									</CircleBtn>
								</>
							) : (
								<>
									<NavInput
										error={error}
										required='true'
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
						<BtnPrimary onClick={handleLogout}>Logout</BtnPrimary>
						<CircleBtn type='button'>
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
		</NavContainer>
	);
};

export default NavBar;
