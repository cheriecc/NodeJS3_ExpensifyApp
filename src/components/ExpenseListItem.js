import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, note, amount, createAt }) => {

    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>Amount: {amount}</p>
            <p>CreateAt: {moment(createAt).format('MMM Do YYYY')}</p>
            <p>Note: {note}</p>
        </div>
)}


export default ExpenseListItem;