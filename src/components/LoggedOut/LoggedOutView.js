import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from "./../Button.js";
import { toggleModalAction, whichModalAction } from "./../../actions/index.js";

const LoggedOutContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url("/images/skyBackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoggedOutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    p {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
`;

const Title = styled.div`
    display: flex;

    h1 {
        font-size: 3em;
    }

    .orange {
        color: #e56b6f;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    button {
        margin: 0 10px;
    }
`;

const LoggedOutView = () => {
    const dispatch = useDispatch()

    const openModal = (modal)  => {
        dispatch(toggleModalAction());
        dispatch(whichModalAction(modal));
    }
    return (
        <LoggedOutContainer>
            <LoggedOutContent>
                <Title>
                    <h1>habit</h1><h1 className="orange">track</h1>
                </Title>
                <p>An easy way to make better choices automatic</p>
                <Buttons>
                    <Button content='Register' color='#355070' fontWeight="bold" width="130px" handleClick={ () => openModal('register') } />
                    <Button content='Login' color='#6d597a' fontWeight="bold" width="130px" handleClick={ () => openModal('login') }/>
                </Buttons>
            </LoggedOutContent>
        </LoggedOutContainer>
    )
}

export default LoggedOutView