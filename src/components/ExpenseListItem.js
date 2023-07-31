import React from 'react';

const ExpenseListItem = ({ description, amount, createAt }) => (
    <div>
        <h3>{description}</h3>
        <p>amount: {amount}</p>
        <p>createAt: {createAt}</p>
    </div>
)

export default ExpenseListItem