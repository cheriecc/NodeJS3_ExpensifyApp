import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = configureStore({
        reducer: combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    })

    return store
}
