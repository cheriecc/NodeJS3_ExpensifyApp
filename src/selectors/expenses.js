import moment from "moment";

// Get Visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createAt)) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createAt)) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return moment(a.createAt).isBefore(moment(b.createAt)) ? 1 : -1; // most recent result comes first
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // largest amount result comes first
        }
    })
}

export default getVisibleExpenses