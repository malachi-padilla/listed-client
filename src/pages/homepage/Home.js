import React, { useState } from 'react';
import { HomeContainer } from './Home-css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';
import { MyContext } from '../../GlobalContext';
const Home = () => {
	const { user } = useContext(MyContext);

	return <HomeContainer>{!user ? null : user && user.email}</HomeContainer>;
};

export default Home;
