import React from 'react';
import { useSelector } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = () => {

    const expenses = useSelector(state => selectExpenses(state.expenses, state.filters))

    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {expenses.length === 0 && (<div className="list-item list-item__message"><span>No Expense</span></div>)}
                {expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
            </div>
        </div>
)};

export default ExpenseList;