import React, { useState } from "react";
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseForm = (props) => {

    const originalState = {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? props.expense.amount.toString() :'',
        createAt: props.expense ? props.expense.createAt : moment().valueOf(),
        calenderFocused: false,
        error: ''
    }

    const [expenseState, setState] = useState(originalState)


    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setState(oldState => ({ ...oldState, description }));
    };

    const onNoteChange = (e) => {
        const note = e.target.value;
        setState(oldState => ({ ...oldState, note }));
    };

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setState(oldState => ({...oldState, amount}));
        }
    };

    const onDateChange = (createAt) => {
        if (createAt) {
            setState(oldState => ({ ...oldState, createAt }));
        }
    };

    const onFocusChange = ({ focused }) => {
        setState(oldState => ({ ...oldState, calenderFocused: focused }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!expenseState.description || !expenseState.amount) {
            setState(oldState => ({ ...oldState, error: 'Please provide description and amount.' }));
        } else {
            setState(oldState => ({ ...oldState, error: '' }));
            props.onSubmit({
                description: expenseState.description,
                amount: parseFloat(expenseState.amount, 100),
                createAt: expenseState.createAt.valueOf(),
                note: expenseState.note
            });            
        }
    }

    return (
        <div>
            {expenseState.error && <p>{expenseState.error}</p>}
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={expenseState.description}
                    onChange={onDescriptionChange}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={expenseState.amount}
                    onChange={onAmountChange}
                />
                <SingleDatePicker
                    date={moment(expenseState.createAt)}
                    onDateChange={onDateChange}
                    focused={expenseState.calenderFocused}
                    onFocusChange={onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={expenseState.note}
                    onChange={onNoteChange}
                >
                </textarea>
                <button>{props.expense ? `Edit Expense`: `Add Expense`}</button>
            </form>
        </div>
    )
}

export default ExpenseForm;