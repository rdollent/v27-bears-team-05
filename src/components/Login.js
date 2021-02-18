import React from "react";
import Button from "./Button.js";
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        cursor: pointer;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Login = ( { close } ) => {
    return (
        <LoginContainer>
            <LoginForm id="habit-add">
                <label htmlFor="username">Username</label>
                <input className="mb-1" id="username" placeholder="Username" type="text" />
                <label htmlFor="password">Password</label>
                <input className="mb-1" id="password" placeholder="Password" type="password" />
                <Button type="submit" content="Login" handleClick={ () => console.log( 'login' ) }/>
            </LoginForm>
            <p onClick={ close }>Close</p>
        </LoginContainer>
    );
};

export default Login;
