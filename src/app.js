import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';  // make our app compatible with different browsers
import './styles/styles.scss';

var appRoot = document.getElementById('app')
var root = ReactDOM.createRoot(appRoot)

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 20, createAt: 3000 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 30, createAt: 2000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 450, createAt: 1000 }))
// store.dispatch(setTextFilter(''))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


root.render(jsx)
