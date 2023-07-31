import React from "react";
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Dashboard</NavLink>
        <NavLink to="/create" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Create Expense</NavLink>
        <NavLink to="/edit" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Edit Expense</NavLink>
        <NavLink to="/help" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Help</NavLink>
    </header>
)

export default Header