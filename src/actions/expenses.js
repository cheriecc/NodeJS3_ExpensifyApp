import { auth, db } from '../firebase/firebase';
import { ref, push, get, remove, update } from 'firebase/database';


export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
})

export const addNewExpense = (expenseData = {}) => {
    return async (dispatch) => {

        const {
            description = '',
            note = '',
            amount = 0,
            createAt = 0,
        } = expenseData;

        const expense = {description, note, amount, createAt};
        const snapshot = await push(ref(db, `users/${auth.currentUser.uid}/Expenses`), expense)

        dispatch(addExpense({ id: snapshot.key, ...expense }));
    }
}


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const deleteExpense = ({ id } = {}) => {
    return async (dispatch) => {

        await remove(ref(db, `users/${auth.currentUser.uid}/Expenses/${id}`))
        dispatch(removeExpense({ id }))
    }
}


// EDIT_EXPENSE
export const editExpense = (id , updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const updateExpense = (id, updates) => {
    return async (dispatch) => {

        await update(ref(db, `users/${auth.currentUser.uid}/Expenses/${id}`), updates)
        dispatch(editExpense(id, updates))
    }
}


// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const setAllExpenses = () => {
    return async (dispatch) => {

        const snapshot = await get(ref(db, `users/${auth.currentUser.uid}/Expenses`));
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        dispatch(setExpenses(expenses));
    }
}