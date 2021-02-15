import React from "react";
import Button from "./Button.js";
import styled from 'styled-components';

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        cursor: pointer;
    }
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Register = ( { close } ) => {
    return (
        <RegisterContainer>
            <RegisterForm id="habit-add">
                <label htmlFor="username">Username</label>
                <input className="mb-1" id="username" placeholder="Username" type="text" />
                <label htmlFor="email">Email</label>
                <input className="mb-1" id="email" placeholder="Email" type="text" />
                <label htmlFor="password">Password</label>
                <input className="mb-1" id="password" placeholder="Password" type="password" />
                <Button type="submit" content="Register" handleClick={ () => console.log( 'register' ) } />
            </RegisterForm>
            <p onClick={ close  }>Close</p>
        </RegisterContainer>
    );
};

export default Register;
