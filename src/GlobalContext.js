import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { fetchIpData } from './api/ipData';
import publicIp from 'public-ip';
import { setMongoUser } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from './api/userData';

export const MyContext = createContext({
	user: null,
	geoLocation: null,
});

const GlobalContext = ({ children }) => {
	const [user, setUser] = useState(null);
	const [geoLocation, setGeoLocation] = useState(null);
	const dispatch = useDispatch();
	const { mongoUser } = useSelector((state) => state);

	const auth = getAuth();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				loginRequest(user.uid).then((res) => {
					dispatch(setMongoUser(res));
				});
			} else {
				setUser(null);
				dispatch(setMongoUser(null));
			}
		});
		console.log(mongoUser);
	}, [user]);

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
