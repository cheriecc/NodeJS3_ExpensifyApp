import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        filters: filtersReducer
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false,
        })
})

export default store