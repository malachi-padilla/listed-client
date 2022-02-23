import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { createContext } from 'react';
import { useState } from 'react';

export const MyContext = createContext({
	user: null,
});

const GlobalContext = ({ children }) => {
	const [user, setUser] = useState(null);

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

	return <MyContext.Provider value={{ user }}>{children}</MyContext.Provider>;
};

export default GlobalContext;
