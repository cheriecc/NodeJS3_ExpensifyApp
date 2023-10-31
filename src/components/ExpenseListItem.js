import React from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, note, amount, createAt }) => {
 
    const dispatch = useDispatch();

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>Amount: {amount}</p>
            <p>CreateAt: {createAt}</p>
            <p>Note: {note}</p>
            <button onClick={() => {
                dispatch(removeExpense({ id }));
            }}>Remove</button>
        </div>
)}


export default ExpenseListItem;