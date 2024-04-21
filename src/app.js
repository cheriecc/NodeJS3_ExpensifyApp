import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import { setAllExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';  // make app compatible with different browsers
import './styles/styles.scss';
import { auth } from './firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { logOut } from './actions/auth';
import LoadingPage from './components/LoadingPage';

var appRoot = document.getElementById('app')
var root = ReactDOM.createRoot(appRoot)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

root.render(<LoadingPage />)

onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log('Log in')
        console.log('uid: ' + auth.currentUser.uid)
        store.dispatch(setAllExpenses()).then(() => root.render(jsx))
    } else {
        store.dispatch(logOut(() => root.render(jsx)))
    }

})

