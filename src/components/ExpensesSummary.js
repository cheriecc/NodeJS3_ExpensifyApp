import React from 'react';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';


const ExpensesSummary = () => {

    const selectedExpenses = useSelector(state => selectExpenses(state.expenses, state.filters))

    const expenseCount = selectedExpenses.length;
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    let expenseTotal = 0;
    selectedExpenses.forEach((i) => expenseTotal += i.amount);
    const formattedExpenseTotal = numeral(expenseTotal).format("$0, 0.00");

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} total {formattedExpenseTotal}</h1>
        </div>
    )
}

export default ExpensesSummary;