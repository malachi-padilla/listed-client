import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import mainReducer from './redux/reducers';
const store = createStore(mainReducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalContext>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</GlobalContext>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
