import { SET_ERROR, SET_LOGIN_EMAIL, SET_LOGIN_PASSWORD } from './actions';
const initialState = {
	loginEmail: '',
	loginPassword: '',
	error: false,
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_EMAIL:
			return {
				...state,
				loginEmail: action.payload,
			};

		case SET_LOGIN_PASSWORD:
			return {
				...state,
				loginPassword: action.payload,
			};

		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default mainReducer;
