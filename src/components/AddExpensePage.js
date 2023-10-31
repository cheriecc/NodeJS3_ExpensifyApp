import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';


const AddExpensePage = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    dispatch(addExpense(expense));
                    navigate("/");
                }}
            />
        </div>
    )
}

export default AddExpensePage;