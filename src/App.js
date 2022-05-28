import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppContainer, ContentContainer, PageContainer } from './App-css';
import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/homepage/Home';
import Login from './pages/loginPage/Login';
import Register from './pages/registerPage/Register';
// eslint-disable-next-line
import { getWidth } from './util/functions';
import Listing from './pages/listingPage/Listing';
import Buying from './pages/buyingPage/Buying';
import Selling from './pages/sellingPage/Selling';
import ListItem from './pages/listingPage/listItem/ListItem';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './theme/theme';
import { GlobalStyles } from './GlobalStyles';
import { useStickyState } from './util/customHooks';
import ListItemSidebar from './components/listingPage/listItemSidebar/ListItemSidebar';
import ListingSidebar from './components/listingPage/ListingSidebar';

const App = () => {
	// eslint-disable-next-line
	const [isDesktop, setIsDesktop] = useState(getWidth);
	const [isDarkTheme, setIsDarkTheme] = useStickyState(false, 'isDarkTheme');
	const location = useLocation();

	useEffect(() => {
		const handleIsDesktop = () => {
			setIsDesktop(getWidth);
		};
		window.addEventListener('resize', handleIsDesktop);
	}, []);

	const renderSidebarOnLocation = () => {
		if (location.pathname === '/create') {
			return <ListingSidebar />;
		} else if (location.pathname === '/create/item') {
			return <ListItemSidebar />;
		} else return <Sidebar isDesktop={isDesktop} />;
	};

	return (
		<ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
			<GlobalStyles />
			<AppContainer>
				<NavBar isDesktop={isDesktop} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
				<ContentContainer>
					{renderSidebarOnLocation()}
					<PageContainer>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/create' element={<Listing />} />
							<Route path='/create/item' element={<ListItem />} />
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
