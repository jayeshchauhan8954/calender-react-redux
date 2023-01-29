export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth();

//  return  total no of days in month
export const dayInMonth = function(month, year) {
	return new Date(year, month + 1, 0).getDate();
};

// return day for the date

export const monthDays = function(date) {
	return new Date(date).getDay();
};

// 0 to 6
