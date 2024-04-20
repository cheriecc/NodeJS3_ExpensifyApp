import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewExpense } from '../actions/expenses';
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
                    dispatch(addNewExpense(expense));
                    navigate("/dashboard");
                }}
            />
        </div>
    )
}

export default AddExpensePage;