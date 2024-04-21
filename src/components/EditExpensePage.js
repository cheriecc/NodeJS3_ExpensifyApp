import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateExpense, deleteExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const EditExpensePage = () => {

    const { id } = useParams();
    const expense = useSelector(state => state.expenses.find((e) => e.id === id))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
            <ExpenseForm
                expense={expense}
                onSubmit={(expenseUpdate) => {
                    dispatch(updateExpense(id, expenseUpdate));
                    navigate("/dashboard");
                } }
            />
            <button className="button button__secondary" onClick={() => {
                dispatch(deleteExpense({ id }));
                navigate("/dashboard");
            }}>Remove Expense</button>
            </div>
        </div>
    )
}

export default EditExpensePage;