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
import { getWidth } from './util/functions';
import Listing from './pages/listingPage/Listing';
import Cart from './pages/cartPage/Cart';
import Buying from './pages/buyingPage/Buying';
import Selling from './pages/sellingPage/Selling';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './theme/theme';
import { GlobalStyles } from './GlobalStyles';

const App = () => {
	// eslint-disable-next-line
	const [isDesktop, setIsDesktop] = useState(getWidth);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		setIsDarkTheme(JSON.parse(window.localStorage.getItem('darkTheme')));
	}, []);
	useEffect(() => {
		const handleIsDesktop = () => {
			setIsDesktop(getWidth);
		};
		window.addEventListener('resize', handleIsDesktop);
	}, []);
	useEffect(() => {
		window.localStorage.setItem('darkTheme', isDarkTheme);
	}, [isDarkTheme]);

	return (
		<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
			<GlobalStyles />
			<AppContainer>
				<NavBar isDesktop={isDesktop} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
				<ContentContainer>
					{isDesktop && <Sidebar />}
					<PageContainer>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/create' element={<Listing />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/buying' element={<Buying />} />
							<Route path='/selling' element={<Selling />} />
						</Routes>
					</PageContainer>
				</ContentContainer>
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;
