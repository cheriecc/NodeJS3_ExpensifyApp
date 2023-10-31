import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const EditExpensePage = () => {

    const { id } = useParams();
    const expense = useSelector(state => state.expenses.find((e) => e.id === id))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    return (
        <div>
            This is Edit page with id of {id}
            <p>Expense Item: {expense.description}</p>
            <p>Expense Amount: {expense.amount}</p>
            <p>Expense Time: {expense.createAt}</p>
            <ExpenseForm
                expense={expense}
                onSubmit={(expenseUpdate) => {
                    dispatch(editExpense(id, expenseUpdate));
                    navigate("/");
                } }
            />
        </div>
    )
}

export default EditExpensePage;