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
            This is Edit page with id of {id}
            <ExpenseForm
                expense={expense}
                onSubmit={(expenseUpdate) => {
                    dispatch(updateExpense(id, expenseUpdate));
                    navigate("/dashboard");
                } }
            />
            <button onClick={() => {
                dispatch(deleteExpense({ id }));
                navigate("/dashboard");
            }}>Remove</button>
        </div>
    )
}

export default EditExpensePage;