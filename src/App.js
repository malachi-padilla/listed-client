import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContainer, ContentContainer, PageContainer } from './App-css';
import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/homepage/Home';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
// eslint-disable-next-line
import app from './config/firebaseConfig';

const App = () => {
	const getWidth = () => {
		if (window.innerWidth >= 1366) {
			return true;
		} else {
			return false;
		}
	};
	const [isDesktop, setIsDesktop] = useState(getWidth);
	useEffect(() => {
		const handleIsDesktop = () => {
			setIsDesktop(getWidth);
		};
		window.addEventListener('resize', handleIsDesktop);
	}, []);

	return (
		<AppContainer>
			<NavBar isDesktop={isDesktop} />
			<ContentContainer>
				<Sidebar />
				<PageContainer>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/register' element={<Register />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</PageContainer>
			</ContentContainer>
		</AppContainer>
	);
};

export default App;
