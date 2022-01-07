import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContainer, ContentContainer, PageContainer } from './App-css';
import NavBar from './components/navbar/NavBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/homepage/Home';

const App = () => {
	return (
		<AppContainer>
			<NavBar />
			<ContentContainer>
				<Sidebar />
				<PageContainer>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</PageContainer>
			</ContentContainer>
		</AppContainer>
	);
};

export default App;
