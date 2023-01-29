import { CHANGE_MONTH } from '../actions/CalendarAction';
import { dayInMonth, monthDays, selectedMonth, selectedYear } from '../utils/dateUtil';
import { getDays } from '../utils/calendarUtil';

const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);

const endDay = dayInMonth(selectedMonth, selectedYear);

const initialState = {
	startDay,
	endDay,
	selectedMonth,
	selectedYear,
	days: getDays(startDay, endDay)
};

export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_MONTH:
			// logic for changing dates
			console.log('action', action);
			const { selectedYear, selectedMonth } = action.payload;
			const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
			const endDay = dayInMonth(selectedMonth, selectedYear);
			const days = getDays(startDay, endDay);
			return { ...state, selectedMonth, selectedYear, days };

		default:
			return state;
	}
};
