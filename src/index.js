import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './GlobalStyles';
import GlobalContext from './GlobalContext';

ReactDOM.render(
	<React.StrictMode>
		<GlobalContext>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<GlobalStyles />
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</GlobalContext>
	</React.StrictMode>,
	document.getElementById('root')
);
