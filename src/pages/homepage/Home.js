import React, { useState } from 'react';
import { HomeContainer } from './Home-css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const Home = () => {
	const [user, setUser] = useState();

	// run this block to get a user ----
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
			// ...
		} else {
			setUser(null);
			// User is signed out
			// ...
		}
	});
	// --------

	if (user === undefined) {
		return <HomeContainer></HomeContainer>;
	}

	return <HomeContainer>{user ? <h1>Welcome home {user.email}</h1> : <h1>Home</h1>}</HomeContainer>;
};

export default Home;
