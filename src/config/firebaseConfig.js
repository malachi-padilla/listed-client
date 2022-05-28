// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyA73eJUkrbIwhVpK-ZlBko6Wyp84QIOwa4',
	authDomain: 'listed-db.firebaseapp.com',
	projectId: 'listed-db',
	storageBucket: 'listed-db.appspot.com',
	messagingSenderId: '447393444585',
	appId: '1:447393444585:web:e762e253290b574cb8b678',
};

const app = initializeApp(firebaseConfig);

export default app;
