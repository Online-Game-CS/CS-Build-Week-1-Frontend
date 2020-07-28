import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes'
import store from './state/store';


function App() {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
