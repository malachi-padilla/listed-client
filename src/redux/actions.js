import { createAction } from 'redux-actions';
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_ERROR = 'SET_ERROR';

export const setLoginEmailAction = createAction('SET_LOGIN_EMAIL');
export const setLoginPasswordAction = createAction('SET_LOGIN_PASSWORD');
export const setErrorAction = createAction('SET_ERROR');
