import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import { Provider } from 'react-redux';
import { CHANGE_MONTH } from './actions/CalendarAction';
import store from './store/Store';

function App() {
	return (
		<div className="app">
			<Provider store={store}>
				<Calendar />
			</Provider>
		</div>
	);
}

export default App;
