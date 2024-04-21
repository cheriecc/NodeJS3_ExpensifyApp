import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title" >Viewing <span>{expenseCount}</span> {expenseWord} total <span>{formattedExpenseTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

export default ExpensesSummary;