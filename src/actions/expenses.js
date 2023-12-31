import { v4 as uuid } from 'uuid';

// ADD_EXPENSE
export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createAt
        }
    })

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
// to define function name & input ; but don't do anything with the operation & output
export const editExpense = (id , update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})