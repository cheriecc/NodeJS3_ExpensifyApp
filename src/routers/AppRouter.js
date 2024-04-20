import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
            < Header/>
            <Routes>
            <Route exact path ='/' element={<PrivateRoute />}>
                <Route path="/dashboard" element={<ExpenseDashboardPage/>} />
                <Route path="/create" element={<AddExpensePage/>} />
                <Route path="/edit/:id" element={<EditExpensePage/>} />
            </Route>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/help" element={<HelpPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
            </Routes>
    </BrowserRouter>
)

export default AppRouter