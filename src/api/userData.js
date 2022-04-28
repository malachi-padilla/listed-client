import axios from 'axios';
import { API_URL } from '../config/globalVars';

export async function registerUserRequest(username, userId) {
	let options = {
		method: 'POST',
		url: `${API_URL}api/user/register`,
		data: {
			username: username,
			userId: userId,
		},
	};

	return new Promise(async (resolve, reject) => {
		axios.request(options).then((res) => resolve(res.data));
	});
}

export async function loginRequest(userId) {
	let options = {
		method: 'GET',
		url: `${API_URL}api/user/login`,
		params: { userId: userId },
	};
	return new Promise(async (resolve, reject) => {
		axios.request(options).then((res) => resolve(res.data));
	});
}
