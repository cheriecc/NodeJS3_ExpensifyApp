import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from "../actions/auth";
import { auth } from '../firebase/firebase'


const Header = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div>
        <h1>Expensify App</h1>
        {!!auth.currentUser && (
            <header>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Dashboard</NavLink>
                <NavLink to="/create" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Create Expense</NavLink>
                <NavLink to="/help" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Help</NavLink>
                <button onClick={() => dispatch(logOut(() => navigate('/login')))}>Log out</button>
            </header>
        ) }
        </div>
)}

export default Header