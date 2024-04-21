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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm
                    onSubmit={(expense) => {
                        dispatch(addNewExpense(expense));
                        navigate("/dashboard");
                    }}
                />
            </div>
        </div>
    )
}

export default AddExpensePage;