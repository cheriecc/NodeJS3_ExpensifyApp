import React from 'react';
import { useSelector } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = () => {

    const expenses = useSelector(state => selectExpenses(state.expenses, state.filters))

    return (
        <div>
            <h1>Expense List</h1>
            <p>{expenses.length}</p>
            {expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
        </div>
)};

export default ExpenseList;