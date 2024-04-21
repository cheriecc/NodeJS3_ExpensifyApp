import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logIn } from '../actions/auth';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout-title">Expensify</h1>
                <p>An useful app to get your expenses under control.</p>
                <button className="button" onClick={() => {
                    dispatch(logIn(() => navigate('/dashboard')))
                }}>Log in with Google</button>
            </div>
        </div>
    )
}

export default LoginPage;