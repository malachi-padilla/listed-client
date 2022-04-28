import { createAction } from 'redux-actions';
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_ERROR = 'SET_ERROR';
export const SET_MONGO_USER = 'SET_MONGO_USER';

export const setLoginEmailAction = createAction('SET_LOGIN_EMAIL');
export const setLoginPasswordAction = createAction('SET_LOGIN_PASSWORD');
export const setErrorAction = createAction('SET_ERROR');
export const setMongoUser = createAction('SET_MONGO_USER');
