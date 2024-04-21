import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from "../actions/auth";
import { auth } from '../firebase/firebase'


const Header = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (!!auth.currentUser) {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__navbar">
                    <Link className="header__title" to="/dashboard" >
                        <h1>Expensify</h1>
                    </Link>
                    <button className="button button--link" onClick={() => dispatch(logOut(() => navigate('/login')))}>Log out</button>
                    </div>
                </div>
            </header>
    )}
}
      
            {/* <div>
                <h1>Expensify App</h1>
                <header>
                    <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Dashboard</NavLink>
                    <NavLink to="/create" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Create Expense</NavLink>
                    <NavLink to="/help" className={({ isActive }) => (isActive ? "is-active" : "")} end={true}>Help</NavLink>
                    <button onClick={() => dispatch(logOut(() => navigate('/login')))}>Log out</button>
                </header>
            </div> */}

export default Header