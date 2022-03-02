import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { fetchIpData } from './api/ipData';
import publicIp from 'public-ip';

export const MyContext = createContext({
	user: null,
	geoLocation: null,
});

const GlobalContext = ({ children }) => {
	const [user, setUser] = useState(null);
	const [geoLocation, setGeoLocation] = useState(null);

	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUser(user);
		} else {
			setUser(null);
		}
	});
	useEffect(() => {
		const getData = async () => {
			let ipAdress = await publicIp.v4();
			const cityAndRegion = await fetchIpData(ipAdress);
			setGeoLocation(cityAndRegion);
		};
		getData();
	}, []);
	return <MyContext.Provider value={{ user, geoLocation }}>{children}</MyContext.Provider>;
};

export default GlobalContext;
