import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logIn } from '../actions/auth';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                dispatch(logIn(() => navigate('/dashboard')))
            }}>Log in</button>
        </div>
    )
}

export default LoginPage;