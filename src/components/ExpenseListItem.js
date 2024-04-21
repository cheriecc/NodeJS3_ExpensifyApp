import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const pounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
})

const ExpenseListItem = ({ id, description, amount, createAt }) => {

    return (
        <div >
            <Link className="list-item" to={`/edit/${id}`}>
                <div>
                    <h3 className="list-item__title" >{description}</h3>
                    <span className="list-item__sub-title">{moment(createAt).format('MMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__data">{pounds.format(amount)}</h3>
            </Link>
        </div>
)}


export default ExpenseListItem;